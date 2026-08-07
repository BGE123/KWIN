"use client";
import imageCompression from "browser-image-compression";
import { JSX, useEffect, useState } from "react";
import { Fraunces, Inter } from "next/font/google";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ---------------- Types ---------------- */
type StatusDraftPub = "Draft" | "Published";
type StatusPendConf = "Pending" | "Confirmed";
type StatusPendApprDecl = "Pending" | "Approved" | "Declined";
type StatusActiveInact = "Active" | "Inactive";
type StatusEvent = "Upcoming" | "Completed" | "Draft";
type StatusVolunteer = "Pending" | "Active" | "Inactive";

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  date: string;
  status: StatusDraftPub;
  category: string;
  caption: string;
  aspect_ratio: string;
}

interface Donation {
  id: number;
  donor_name: string;
  amount: number;
  directed_to: string;
  date: string;
  status: StatusPendConf;
}

interface Program {
  id: number;
  title: string; // Renamed from 'name'
  description: string;
  category: string; // Added
  tags: string; // Added
  footer_text: string; // Added
  button_text: string; // Added
  image_url: string; // Added
  icon_url: string; // Added
  is_reverse: boolean; // Added
  status: StatusActiveInact;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  status: StatusEvent;
  // Added for the frontend:
  slug: string;
  image_url: string;
  bg_color: string;
  text_color: string;
  date_color: string;
}

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  status: StatusDraftPub;
  slug: string;
  image_url: string;
  author_image: string;
  read_time: string;
  category: string;
  content: string;
}

interface Application {
  id: number;
  applicant_name: string;
  email: string;
  phone: string; // Added
  state: string; // Added
  school_name: string; // Added
  program: string;
  status: StatusPendApprDecl;
  // Note: For brevity in the admin grid, we don't display all 18 columns,
  // but they are saved in the DB!
}

interface Volunteer {
  id: number;
  name: string;
  email: string;
  phone: string; // Added
  skills: string;
  availability: string; // Added
  message: string; // Added
  status: StatusVolunteer;
}

interface DB {
  gallery: GalleryItem[];
  donations: Donation[];
  programs: Program[];
  events: EventItem[];
  articles: Article[];
  applications: Application[];
  volunteers: Volunteer[];
}

type TableKey = keyof DB;
type FormKey = TableKey;
type ViewKey = "dashboard" | TableKey;

type FieldType = "text" | "textarea" | "number" | "date" | "select" | "image";
interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
}
interface FormConfig {
  title: { new: string; edit: string };
  table: TableKey;
  fields: FieldConfig[];
}

const navItems: { key: ViewKey; label: string; group: string }[] = [
  { key: "dashboard", label: "Dashboard", group: "General" },
  { key: "articles", label: "Articles", group: "Content" },
  { key: "gallery", label: "Gallery", group: "Content" },
  { key: "events", label: "Events", group: "Engagement" },
  { key: "programs", label: "Programs", group: "Management" },
  { key: "applications", label: "Applications", group: "Management" },
  { key: "donations", label: "Donations", group: "Support" },
  { key: "volunteers", label: "Volunteers", group: "Support" },
];

const titles: Record<ViewKey, { eyebrow: string; title: string }> = {
  dashboard: { eyebrow: "Overview", title: "Dashboard" },
  articles: { eyebrow: "Content", title: "Articles & News" },
  gallery: { eyebrow: "Content", title: "Media Gallery" },
  events: { eyebrow: "Engagement", title: "Events" },
  programs: { eyebrow: "Management", title: "Programs" },
  applications: { eyebrow: "Management", title: "Program Applications" },
  donations: { eyebrow: "Support", title: "Donations" },
  volunteers: { eyebrow: "Support", title: "Volunteers" },
};

const formConfigs: Record<FormKey, FormConfig> = {
  gallery: {
    title: { new: "Add media", edit: "Edit media" },
    table: "gallery",
    fields: [
      {
        key: "title",
        label: "Internal Title (For your eyes only)",
        type: "text",
      },
      { key: "image_url", label: "Upload Image", type: "image" },
      {
        key: "category",
        label: "Filter Category",
        type: "select",
        options: ["TRAINING", "WORKSHOP", "CEREMONY", "COMMUNITY"],
      },
      {
        key: "aspect_ratio",
        label: "Grid Shape (Aspect Ratio)",
        type: "select",
        options: [
          "aspect-square",
          "aspect-[4/5]",
          "aspect-[3/4]",
          "aspect-[16/9]",
          "aspect-[4/3]",
        ],
      },
      { key: "caption", label: "Hover Caption", type: "textarea" },
      { key: "date", label: "Date", type: "date" },
      {
        key: "status",
        label: "Status",
        type: "select",
        options: ["Draft", "Published"],
      },
    ],
  },
  donations: {
    title: { new: "Log donation", edit: "Edit donation" },
    table: "donations",
    fields: [
      { key: "donor_name", label: "Donor name", type: "text" },
      { key: "amount", label: "Amount (₦)", type: "number" },
      { key: "directed_to", label: "Directed to", type: "text" },
      { key: "date", label: "Date", type: "date" },
      {
        key: "status",
        label: "Status",
        type: "select",
        options: ["Pending", "Confirmed"],
      },
    ],
  },
  programs: {
    title: { new: "New program", edit: "Edit program" },
    table: "programs",
    fields: [
      { key: "title", label: "Program Title", type: "text" },
      {
        key: "category",
        label: "Category (e.g., Academic Excellence)",
        type: "text",
      },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "tags",
        label: "Tags (Comma separated: Catering, Tailoring)",
        type: "textarea",
      },
      { key: "image_url", label: "Card Image", type: "image" },
      { key: "icon_url", label: "Small Icon Upload", type: "image" },
      { key: "footer_text", label: "Footer Highlight Text", type: "text" },
      { key: "button_text", label: "Button Text", type: "text" },
      {
        key: "status",
        label: "Status",
        type: "select",
        options: ["Active", "Inactive"],
      },
    ],
  },
  events: {
    title: { new: "New event", edit: "Edit event" },
    table: "events",
    fields: [
      { key: "title", label: "Event Title", type: "text" },
      { key: "image_url", label: "Event Image", type: "image" },
      { key: "date", label: "Date", type: "date" },
      { key: "location", label: "Location", type: "text" },
      {
        key: "bg_color",
        label: "Background Color Class",
        type: "select",
        options: [
          "bg-[#FCF3FC]",
          "bg-[#00AEEF]",
          "bg-[#F8F4EC]",
          "bg-gray-900",
        ],
      },
      {
        key: "text_color",
        label: "Text Color Class",
        type: "select",
        options: ["text-[#a8248c]", "text-white", "text-[#1a1543]"],
      },
      {
        key: "date_color",
        label: "Date Color Class",
        type: "select",
        options: ["text-[#a8248c]", "text-white/80", "text-gray-500"],
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        options: ["Upcoming", "Completed", "Draft"],
      },
    ],
  },
  articles: {
    title: { new: "New article", edit: "Edit article" },
    table: "articles",
    fields: [
      { key: "title", label: "Title", type: "text" },
      {
        key: "category",
        label: "Category",
        type: "select",
        options: ["ARTICLE", "NEWS", "EVENT"],
      },
      { key: "author", label: "Author Name", type: "text" },
      {
        key: "author_image",
        label: "Author Avatar URL (e.g., /pic1.png)",
        type: "image",
      },
      {
        key: "image_url",
        label: "Main Image URL (e.g., /events/img9.jpg)",
        type: "image",
      },
      {
        key: "read_time",
        label: "Read Time (e.g., 4 mins read)",
        type: "text",
      },
      { key: "date", label: "Date", type: "date" },
      {
        key: "status",
        label: "Status",
        type: "select",
        options: ["Draft", "Published"],
      },
      { key: "content", label: "Article Content", type: "textarea" },
    ],
  },
  applications: {
    title: { new: "Review application", edit: "Update application status" },
    table: "applications",
    fields: [
      { key: "applicant_name", label: "Applicant Name", type: "text" },
      { key: "email", label: "Email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "school_name", label: "School", type: "text" },
      {
        key: "program",
        label: "Program",
        type: "select",
        options: [
          "Character Development",
          "QeDu Education",
          "TechUp Industry",
          "BizUp Entrepreneurs",
        ],
      },
      {
        key: "status",
        label: "Application Status",
        type: "select",
        options: ["Pending", "Approved", "Declined"],
      },
    ],
  },
  volunteers: {
    title: { new: "Add volunteer", edit: "Edit volunteer details" },
    table: "volunteers",
    fields: [
      { key: "name", label: "Full Name", type: "text" },
      { key: "email", label: "Email", type: "text" },
      { key: "phone", label: "Phone Number", type: "text" },
      {
        key: "skills",
        label: "Area of Expertise",
        type: "select",
        options: ["Mentorship", "Tech/IT", "Business/Finance"],
      },
      {
        key: "availability",
        label: "Availability",
        type: "select",
        options: ["Weekends", "Weekdays", "Flexible"],
      },
      { key: "message", label: "Applicant's Message", type: "textarea" },
      {
        key: "status",
        label: "Approval Status",
        type: "select",
        options: ["Pending", "Active", "Inactive"],
      },
    ],
  },
};

/* ---------------- Icons ---------------- */
const icons: Record<ViewKey, JSX.Element> = {
  dashboard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  ),
  articles: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h6M7 12h10M7 16h10" />
    </svg>
  ),
  gallery: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  events: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  programs: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  applications: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  donations: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  volunteers: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4 shrink-0"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const gold = "#C8983B";
const goldSoft = "#E4C177";

function fmtNaira(n: number) {
  return "₦" + Number(n || 0).toLocaleString();
}
function fmtDate(d: string) {
  if (!d) return "";
  return new Date(d + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
function badgeClass(status: string) {
  const map: Record<string, string> = {
    Published: "bg-[#DEEBDF] text-[#3F6B4A]",
    Draft: "bg-[#EFE9DB] text-[#7A7168]",
    Pending: "bg-[#F4E8CC] text-[#8A6511]",
    Approved: "bg-[#DEEBDF] text-[#3F6B4A]",
    Declined: "bg-[#F5DEDA] text-[#8C3B2E]",
    Confirmed: "bg-[#DEEBDF] text-[#3F6B4A]",
    Active: "bg-[#DEEBDF] text-[#3F6B4A]",
    Inactive: "bg-[#EFE9DB] text-[#7A7168]",
    Upcoming: "bg-[#E1EDF5] text-[#2F6B92]",
    Completed: "bg-[#DEEBDF] text-[#3F6B4A]",
  };
  return map[status] || "bg-[#EFE9DB] text-[#7A7168]";
}

const btnBase =
  "border-none cursor-pointer font-semibold text-[13px] px-4 py-[9px] rounded-lg inline-flex items-center gap-[7px] transition active:scale-[0.97]";
const btnGold = `${btnBase} bg-[${gold}] text-[#221a0e] hover:bg-[${goldSoft}]`;
const btnGhost = `${btnBase} bg-transparent text-[#151210] border border-[#E4DCC8] hover:bg-[#EFE9DB]`;
const btnDangerGhost = `${btnBase} bg-transparent text-[#8C3B2E] border border-[#E7CFC8] hover:bg-[#FBF1EE]`;
const btnSm = "px-[10px] py-[6px] text-[12px] rounded-md";

const panelCls =
  "bg-[#FFFEFC] border border-[#E4DCC8] rounded-2xl overflow-hidden mb-6";
const panelHeadCls =
  "flex items-center justify-between px-[22px] py-[18px] border-b border-[#E4DCC8]";
const thCls =
  "text-left text-[10.5px] uppercase tracking-wide text-[#000000] px-[22px] py-[10px] border-b border-[#E4DCC8] bg-[#fcf3fc] font-bold";
const tdCls =
  "px-[22px] py-[14px] border-b border-[#E4DCC8] text-[13.5px] align-middle";
const emptyWrap = "p-12 px-[22px] text-center text-[#7A7168] text-[13.5px]";
const fieldInputCls =
  "w-full border border-[#E4DCC8] rounded-lg px-3 py-[10px] text-[13.5px] bg-[#F8F4EC] text-[#151210] outline-none focus:border-[#C8983B]";

export default function AdminPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Add this state

  // Keep your existing state variables here (modal, formValues, etc...)

  // 🔥 THE AUTH GUARD 🔥
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // Not logged in? Kick them to the login page immediately!
        router.push("/admin/login");
      } else {
        // Logged in? Let them see the page.
        setIsCheckingAuth(false);
      }
    };
    checkUser();
  }, [router]);

  // 🔥 THE LOGOUT FUNCTION 🔥
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // Prevent the dashboard from flashing on the screen before the redirect happen
  const [db, setDb] = useState<DB>({
    gallery: [],
    donations: [],
    programs: [],
    events: [],
    articles: [],
    applications: [],
    volunteers: [],
  });
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewKey>("dashboard");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{
    formKey: FormKey;
    editId?: number;
  } | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string | number>>(
    {},
  );
  const [toast, setToast] = useState<{ msg: string; warn?: boolean } | null>(
    null,
  );

  // Fetch initial data from Supabase
  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    setLoading(true);
    try {
      const [
        { data: gallery },
        { data: donations },
        { data: programs },
        { data: events },
        { data: articles },
        { data: applications },
        { data: volunteers },
      ] = await Promise.all([
        supabase.from("gallery").select("*").order("id", { ascending: true }),
        supabase.from("donations").select("*").order("id", { ascending: true }),
        supabase.from("programs").select("*").order("id", { ascending: true }),
        supabase.from("events").select("*").order("id", { ascending: true }),
        supabase.from("articles").select("*").order("id", { ascending: true }),
        supabase
          .from("applications")
          .select("*")
          .order("id", { ascending: true }),
        supabase
          .from("volunteers")
          .select("*")
          .order("id", { ascending: true }),
      ]);

      setDb({
        gallery: gallery || [],
        donations: donations || [],
        programs: programs || [],
        events: events || [],
        articles: articles || [],
        applications: applications || [],
        volunteers: volunteers || [],
      });
    } catch (err) {
      setToast({ msg: "Failed to load database records", warn: true });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  function switchView(key: ViewKey) {
    setView(key);
    setSearch("");
  }

  function matches(str: string) {
    return str.toLowerCase().includes(search.toLowerCase());
  }

  function openModal(formKey: FormKey, editId?: number) {
    const cfg = formConfigs[formKey];
    const record =
      editId != null
        ? (db[cfg.table].find((r) => r.id === editId) as unknown as Record<
            string,
            string | number
          >)
        : {};
    const initial: Record<string, string | number> = {};
    cfg.fields.forEach((f) => {
      initial[f.key] =
        record[f.key] ?? (f.type === "select" ? (f.options?.[0] ?? "") : "");
    });
    setFormValues(initial);
    setModal({ formKey, editId });
  }

  function closeModal() {
    setModal(null);
    setFormValues({});
  }

  async function saveModal() {
    if (!modal) return;
    const cfg = formConfigs[modal.formKey];

    const missing = cfg.fields.find(
      (f) => f.type !== "number" && !String(formValues[f.key] ?? "").trim(),
    );
    if (missing) {
      setToast({ msg: `${missing.label} is required`, warn: true });
      return;
    }

    const table = cfg.table;

    // Create a clean copy of the data to send to Supabase
    const payloadToSave = { ...formValues };

    // 🔥 Force perfectly formatted slugs ONLY for articles and events
    if (payloadToSave.title && (table === "articles" || table === "events")) {
      payloadToSave.slug = String(payloadToSave.title)
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    } else {
      // If it's NOT an article or event, violently delete any accidental slugs
      delete payloadToSave.slug;
    }

    if (modal.editId != null) {
      // Supabase Update
      const { error } = await supabase
        .from(table)
        .update(payloadToSave) // using the clean payload
        .eq("id", modal.editId);

      if (error) {
        console.error(
          `🚨 SUPABASE UPDATE ERROR (${table}):`,
          error.message,
          error.details,
        );
        setToast({ msg: "Error updating record", warn: true });
        return;
      }
      setToast({ msg: "Changes saved" });
    } else {
      // Supabase Insert
      const { error } = await supabase.from(table).insert([payloadToSave]); // using the clean payload

      if (error) {
        console.error(
          `🚨 SUPABASE INSERT ERROR (${table}):`,
          error.message,
          error.details,
        );
        setToast({ msg: "Error adding record", warn: true });
        return;
      }
      setToast({ msg: "Added successfully" });
    }

    closeModal();
    fetchAllData();
  }

  async function removeItem(table: TableKey, id: number) {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) {
      setToast({ msg: "Failed to delete record", warn: true });
      return;
    }
    setToast({ msg: "Deleted" });
    fetchAllData();
  }

  function updateField(key: string, value: string | number) {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  }
  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setToast({ msg: "Compressing image..." }); // Let the user know it's working

      // 1. Compress the image (Supervisor's logic, adapted for high-res UI)
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1200, // Adjusted from 200 so main images aren't blurry
        useWebWorker: true,
        initialQuality: 0.7,
        fileType: "image/jpeg",
      });

      // 2. Convert to Base64
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        updateField(key, base64data); // Save the base64 string to form values
        setToast({ msg: "Image processed!" });
      };
    } catch (error) {
      console.error("Compression error:", error);
      setToast({ msg: "Failed to process image", warn: true });
    }
  }
  /* ---------------- Derived Metrics ---------------- */
  const totalApps = db.applications.length;
  const pendingApps = db.applications.filter(
    (a) => a.status === "Pending",
  ).length;
  const totalDonations = db.donations
    .filter((d) => d.status === "Confirmed")
    .reduce((s, d) => s + Number(d.amount), 0);
  const activeVols = db.volunteers.filter((v) => v.status === "Active").length;
  const activeProgs = db.programs.filter((p) => p.status === "Active").length;

  const activity = [
    ...db.applications.slice(-3).map((a) => ({
      type: "Application",
      detail: `${a.applicant_name} — ${a.program}`,
      when: "Recently",
      status: a.status,
    })),
    ...db.donations.slice(-3).map((d) => ({
      type: "Donation",
      detail: `${d.donor_name} — ${fmtNaira(d.amount)}`,
      when: fmtDate(d.date),
      status: d.status,
    })),
    ...db.volunteers.slice(-2).map((v) => ({
      type: "Volunteer",
      detail: v.name,
      when: "Recently",
      status: v.status,
    })),
  ];

  /* ---------------- Filtering ---------------- */
  const galleryRows = db.gallery.filter((g) => !search || matches(g.title));
  const donationRows = db.donations.filter(
    (d) => !search || matches(d.donor_name) || matches(d.directed_to),
  );
  const programRows = db.programs.filter((p) => !search || matches(p.title));
  const eventRows = db.events.filter(
    (e) => !search || matches(e.title) || matches(e.location),
  );
  const articleRows = db.articles.filter(
    (a) => !search || matches(a.title) || matches(a.author),
  );
  const appRows = db.applications.filter(
    (a) => !search || matches(a.applicant_name) || matches(a.program),
  );
  const volRows = db.volunteers.filter(
    (v) => !search || matches(v.name) || matches(v.email),
  );

  const activeCfg = modal ? formConfigs[modal.formKey] : null;

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#a8248c] text-white font-bold tracking-widest uppercase">
        Loading Secure Console...
      </div>
    );
  }

  return (
    <div
      className={`${inter.className} min-h-screen bg-[#fcf3fc] text-[#151210] antialiased`}
    >
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-[248px] shrink-0 bg-[#a8248c] text-[#EFE9DB] flex flex-col sticky top-0 h-screen">
          <div className="px-6 pt-7 pb-5 border-b border-white/10">
            <div
              className={`${fraunces.className} text-[22px] font-semibold text-[#E4C177] tracking-wide`}
            >
              KWIN
            </div>
            <div className="text-[11px] uppercase tracking-[1.5px] text-[#FFFFFF] mt-1">
              Admin Console
            </div>
          </div>
          <nav className="flex-1 p-3 overflow-y-auto">
            {(() => {
              let lastGroup: string | null = null;
              return navItems.map((item) => {
                const showLabel = item.group !== lastGroup;
                lastGroup = item.group;
                const isActive = view === item.key;
                return (
                  <div key={item.key}>
                    {showLabel && (
                      <div className="text-[10px] uppercase tracking-[1.4px] text-[#FFFFFF] px-3 pt-4 pb-1.5">
                        {item.group}
                      </div>
                    )}
                    <div
                      onClick={() => switchView(item.key)}
                      className={`flex items-center gap-[11px] px-3 py-2.5 rounded-lg text-[13.5px] tracking-wide cursor-pointer select-none transition
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#C8983B]/20 to-[#C8983B]/5 text-[#E4C177] font-semibold [&_svg]:opacity-100"
                            : "text-[#C9C1B6] hover:bg-[#241C16] hover:text-white [&_svg]:opacity-85"
                        }`}
                    >
                      {icons[item.key]}
                      <span>{item.label}</span>
                      {item.key !== "dashboard" && (
                        <span className="ml-auto text-[10.5px] bg-white/[0.08] text-[#D8D0C2] px-[7px] py-[1px] rounded-full">
                          {db[item.key as TableKey].length}
                        </span>
                      )}
                    </div>
                  </div>
                );
              });
            })()}
          </nav>
          <div className="px-5 pt-4 pb-[22px] border-t border-white/10 flex items-center gap-[10px]">
            <div className="w-8 h-8 rounded-full bg-[#C8983B] text-[#151210] flex items-center justify-center font-bold text-[13px] shrink-0">
              BU
            </div>
            <div>
              <div className="text-[12.5px] text-[#EDE7DA] font-semibold">
                Bekwa Undie
              </div>
              <div className="text-[11px] text-[#7A7168]">Programme Admin</div>
            </div>
          </div>
          {/* LOGOUT BUTTON */}
          <div className="absolute bottom-24 left-0 w-full px-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-white/5 hover:text-red-300 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-[#FFFEFC] border-b border-[#E4DCC8] px-8 py-[18px] flex items-center justify-between sticky top-0 z-[5]">
            <div>
              <div className="text-[11px] uppercase tracking-[1.6px] text-[#C8983B] font-semibold mb-0.5">
                {titles[view].eyebrow}
              </div>
              <h1 className={`${fraunces.className} text-[22px] font-semibold`}>
                {titles[view].title}
              </h1>
            </div>
            {view !== "dashboard" && (
              <div className="flex items-center gap-2 bg-[#EFE9DB] border border-[#E4DCC8] rounded-lg px-3 py-2 w-[260px] text-[#7A7168] text-[13px]">
                <span>⌕</span>
                <input
                  placeholder="Search this section…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border-none bg-transparent outline-none text-[13px] w-full text-[#151210]"
                />
              </div>
            )}
          </div>

          <div className="px-8 pt-7 pb-[60px]">
            {loading ? (
              <div className="p-12 text-center text-[#7A7168]">
                Loading live data from Supabase...
              </div>
            ) : (
              <>
                {/* Dashboard View */}
                {view === "dashboard" && (
                  <div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 mb-7">
                      <div className="relative overflow-hidden bg-[#FFFEFC] border border-[#a8248c] rounded-2xl p-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#a8248c]">
                        <div className="text-[11px] uppercase tracking-[1.2px] text-[#7A7168] font-semibold">
                          Applications
                        </div>
                        <div
                          className={`${fraunces.className} text-[32px] font-semibold mt-1.5`}
                        >
                          {totalApps}
                        </div>
                        <div
                          className={`text-[12px] mt-1 font-semibold ${pendingApps > 0 ? "text-[#8C3B2E]" : "text-[#3F6B4A]"}`}
                        >
                          {pendingApps} pending review
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#FFFEFC] border border-[#a8248c] rounded-2xl p-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#a8248c]">
                        <div className="text-[11px] uppercase tracking-[1.2px] text-[#7A7168] font-semibold">
                          Confirmed Donations
                        </div>
                        <div
                          className={`${fraunces.className} text-[32px] font-semibold mt-1.5`}
                        >
                          {fmtNaira(totalDonations)}
                        </div>
                        <div className="text-[12px] mt-1 font-semibold text-[#3F6B4A]">
                          {db.donations.length} total logs
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#FFFEFC] border border-[#a8248c] rounded-2xl p-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#a8248c]">
                        <div className="text-[11px] uppercase tracking-[1.2px] text-[#7A7168] font-semibold">
                          Active Volunteers
                        </div>
                        <div
                          className={`${fraunces.className} text-[32px] font-semibold mt-1.5`}
                        >
                          {activeVols}
                        </div>
                        <div className="text-[12px] mt-1 font-semibold text-[#3F6B4A]">
                          {db.volunteers.length} total signups
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#FFFEFC] border border-[#a8248c] rounded-2xl p-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#a8248c]">
                        <div className="text-[11px] uppercase tracking-[1.2px] text-[#7A7168] font-semibold">
                          Active Programs
                        </div>
                        <div
                          className={`${fraunces.className} text-[32px] font-semibold mt-1.5`}
                        >
                          {activeProgs}
                        </div>
                        <div className="text-[12px] mt-1 font-semibold text-[#3F6B4A]">
                          Across KWIN scope
                        </div>
                      </div>
                    </div>

                    <div className={panelCls}>
                      <div className={panelHeadCls}>
                        <div>
                          <h2
                            className={`${fraunces.className} text-[17px] font-semibold`}
                          >
                            Recent Activity
                          </h2>
                          <div className="text-[12.5px] text-[#7A7168] mt-0.5">
                            Latest inputs across the platform
                          </div>
                        </div>
                      </div>
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className={thCls}>Type</th>
                            <th className={thCls}>Detail</th>
                            <th className={thCls}>When</th>
                            <th className={thCls}>Status</th>
                          </tr>
                        </thead>
                        <tbody className="[&>tr:last-child>td]:border-b-0">
                          {activity.length ? (
                            activity.map((a, i) => (
                              <tr key={i} className="hover:bg-[#FBF9F4]">
                                <td className={`${tdCls} font-semibold`}>
                                  {a.type}
                                </td>
                                <td className={tdCls}>{a.detail}</td>
                                <td className={tdCls}>{a.when}</td>
                                <td className={tdCls}>
                                  <span
                                    className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(a.status)}`}
                                  >
                                    {a.status}
                                  </span>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4}>
                                <div className={emptyWrap}>
                                  Activity will appear as data is added.
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Articles View */}
                {view === "articles" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Articles
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("articles")}
                      >
                        + New article
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Title</th>
                          <th className={thCls}>Author</th>
                          <th className={thCls}>Date</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {articleRows.map((a) => (
                          <tr key={a.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {a.title}
                            </td>
                            <td className={tdCls}>{a.author}</td>
                            <td className={tdCls}>{fmtDate(a.date)}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(a.status)}`}
                              >
                                {a.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() => openModal("articles", a.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() => removeItem("articles", a.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Gallery View */}
                {view === "gallery" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Gallery
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("gallery")}
                      >
                        + Add media
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Title</th>
                          <th className={thCls}>Image URL</th>
                          <th className={thCls}>Date</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {galleryRows.map((g) => (
                          <tr key={g.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {g.title}
                            </td>
                            <td className={tdCls}>{g.image_url}</td>
                            <td className={tdCls}>{fmtDate(g.date)}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(g.status)}`}
                              >
                                {g.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() => openModal("gallery", g.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() => removeItem("gallery", g.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Events View */}
                {view === "events" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Events
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("events")}
                      >
                        + New event
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Event</th>
                          <th className={thCls}>Date</th>
                          <th className={thCls}>Location</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {eventRows.map((e) => (
                          <tr key={e.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {e.title}
                            </td>
                            <td className={tdCls}>{fmtDate(e.date)}</td>
                            <td className={tdCls}>{e.location}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(e.status)}`}
                              >
                                {e.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() => openModal("events", e.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() => removeItem("events", e.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Programs View */}
                {view === "programs" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Programs
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("programs")}
                      >
                        + New program
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Name</th>
                          <th className={thCls}>Description</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {programRows.map((p) => (
                          <tr key={p.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {p.title}
                            </td>
                            <td className={tdCls}>{p.description}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(p.status)}`}
                              >
                                {p.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() => openModal("programs", p.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() => removeItem("programs", p.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Applications View */}
                {view === "applications" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Applications
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("applications")}
                      >
                        + Add application
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Applicant</th>
                          <th className={thCls}>Email</th>
                          <th className={thCls}>Program</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {appRows.map((a) => (
                          <tr key={a.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {a.applicant_name}
                            </td>
                            <td className={tdCls}>{a.email}</td>
                            <td className={tdCls}>{a.program}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(a.status)}`}
                              >
                                {a.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() =>
                                    openModal("applications", a.id)
                                  }
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() =>
                                    removeItem("applications", a.id)
                                  }
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Donations View */}
                {view === "donations" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Donations
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("donations")}
                      >
                        + Log donation
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Donor</th>
                          <th className={thCls}>Amount</th>
                          <th className={thCls}>Directed To</th>
                          <th className={thCls}>Date</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {donationRows.map((d) => (
                          <tr key={d.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {d.donor_name}
                            </td>
                            <td className={tdCls}>{fmtNaira(d.amount)}</td>
                            <td className={tdCls}>{d.directed_to}</td>
                            <td className={tdCls}>{fmtDate(d.date)}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(d.status)}`}
                              >
                                {d.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() => openModal("donations", d.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() => removeItem("donations", d.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Volunteers View */}
                {view === "volunteers" && (
                  <div className={panelCls}>
                    <div className={panelHeadCls}>
                      <h2
                        className={`${fraunces.className} text-[17px] font-semibold`}
                      >
                        Volunteers
                      </h2>
                      <button
                        className={btnGold}
                        onClick={() => openModal("volunteers")}
                      >
                        + Add volunteer
                      </button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className={thCls}>Name</th>
                          <th className={thCls}>Email</th>
                          <th className={thCls}>Skills</th>
                          <th className={thCls}>Status</th>
                          <th className={thCls}></th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {volRows.map((v) => (
                          <tr key={v.id} className="hover:bg-[#FBF9F4]">
                            <td className={`${tdCls} font-semibold`}>
                              {v.name}
                            </td>
                            <td className={tdCls}>{v.email}</td>
                            <td className={tdCls}>{v.skills}</td>
                            <td className={tdCls}>
                              <span
                                className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full inline-block tracking-wide ${badgeClass(v.status)}`}
                              >
                                {v.status}
                              </span>
                            </td>
                            <td className={tdCls}>
                              <div className="flex gap-1.5 justify-end">
                                <button
                                  className={`${btnGhost} ${btnSm}`}
                                  onClick={() => openModal("volunteers", v.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={`${btnDangerGhost} ${btnSm}`}
                                  onClick={() => removeItem("volunteers", v.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-[#151210]/55 flex items-center justify-center z-50 p-5"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-[#FFFEFC] rounded-2xl w-full max-w-[480px] max-h-[88vh] overflow-y-auto shadow-2xl">
            <div className="px-6 py-5 border-b border-[#E4DCC8] flex items-center justify-between">
              <h3 className="text-[18px] font-semibold">
                {modal.editId != null
                  ? activeCfg?.title.edit
                  : activeCfg?.title.new}
              </h3>
              <button
                className="cursor-pointer text-[#7A7168] text-xl leading-none bg-transparent border-none"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="px-6 py-5 flex flex-col gap-3.5">
              {activeCfg?.fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-[12px] font-semibold uppercase tracking-wide text-[#7A7168] mb-1.5">
                    {f.label}
                  </label>

                  {f.type === "select" ? (
                    <select
                      className={fieldInputCls}
                      value={formValues[f.key] ?? ""}
                      onChange={(e) => updateField(f.key, e.target.value)}
                    >
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      className={`${fieldInputCls} resize-y min-h-[70px]`}
                      value={formValues[f.key] ?? ""}
                      onChange={(e) => updateField(f.key, e.target.value)}
                    />
                  ) : f.type === "image" ? (
                    <div className="flex flex-col gap-3">
                      {/* Image Preview Window */}
                      {formValues[f.key] && (
                        <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden border border-[#E4DCC8]">
                          <Image
                            src={formValues[f.key] as string}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      {/* File Upload Input */}
                      <input
                        className="w-full text-[13.5px] text-[#7A7168] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#EFE9DB] file:text-[#C8983B] hover:file:bg-[#E4DCC8] cursor-pointer"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, f.key)}
                      />
                    </div>
                  ) : (
                    <input
                      className={fieldInputCls}
                      type={f.type}
                      value={formValues[f.key] ?? ""}
                      onChange={(e) =>
                        updateField(
                          f.key,
                          f.type === "number"
                            ? Number(e.target.value)
                            : e.target.value,
                        )
                      }
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="px-6 pb-[22px] pt-4 flex justify-end gap-2.5 border-t border-[#E4DCC8]">
              <button className={btnGhost} onClick={closeModal}>
                Cancel
              </button>
              <button className={btnGold} onClick={saveModal}>
                {modal.editId != null ? "Save changes" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div
        className={`fixed bottom-[26px] right-[26px] bg-[#151210] text-[#F8F4EC] px-5 py-3 rounded-[10px] text-[13px] font-medium shadow-2xl flex items-center gap-[10px] transition-all pointer-events-none z-[100]
          ${toast ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: toast?.warn ? "#8C3B2E" : goldSoft }}
        />
        <span>{toast?.msg}</span>
      </div>
    </div>
  );
}
