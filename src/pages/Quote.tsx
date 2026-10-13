import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Upload,
  AlertCircle,
  Phone,
  CheckCircle2,
  Calendar,
  Clock,
  Home,
  ShieldCheck,
  X,
  FileText
} from "lucide-react";
import { submitQuote, QuoteSubmissionPayload } from "../services/api";
import { BUSINESS_INFO } from "../data/business";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Form State
  const [services, setServices] = useState<string[]>(["Roof Restoration"]);
  const [roofType, setRoofType] = useState<string>("Terracotta tile");
  const [storeys, setStoreys] = useState<string>("Single storey (1)");
  const [roofAge, setRoofAge] = useState<string>("20–30 years");
  const [isLeaking, setIsLeaking] = useState<boolean>(false);

  // Photos Mock Upload
  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{ name: string; url: string }>>([]);

  // Property & Timing
  const [suburb, setSuburb] = useState<string>("Bundoora");
  const [postcode, setPostcode] = useState<string>("3083");
  const [streetAddress, setStreetAddress] = useState<string>("");

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0];

  const [preferredDate, setPreferredDate] = useState<string>(minDateStr);
  const [preferredTimeWindow, setPreferredTimeWindow] = useState<string>("Morning (8am - 12pm)");
  const [urgency, setUrgency] = useState<string>("Within a month");

  // Contact
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactMethod, setContactMethod] = useState<"Call" | "SMS" | "Email">("Call");
  const [notes, setNotes] = useState<string>("");

  // Validation / Submission State
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    referenceNumber: string;
    submittedAt: string;
  } | null>(null);

  // Service options
  const serviceOptions = [
    { id: "Roof Restoration", title: "Roof Restoration", desc: "Clean, repair tiles, rebed/repoint, and 3-coat paint membrane" },
    { id: "Roof Leak Repair", title: "Roof Leak Repair", desc: "Fast leak trace, cracked tile replacement & valley fixes" },
    { id: "Rebedding & Repointing", title: "Rebedding & Repointing", desc: "Structural mortar rebed & AS 2050 flexible pointing" },
    { id: "Roof Painting", title: "Roof Painting", desc: "Airless acrylic membrane spray in Colorbond® colours" },
    { id: "Gutters & Fascia", title: "Gutters, Fascia & Eaves", desc: "New Colorbond® quad gutters and downpipe upgrades" },
    { id: "Solar Panels", title: "Solar Panels", desc: "Roofer-installed solar panels with zero tile cracking" },
    { id: "Not sure", title: "Not Sure / Full Inspection", desc: "Need Marco or Arthur to inspect and give honest recommendation" }
  ];

  const toggleService = (srvId: string) => {
    if (srvId === "Not sure") {
      setServices(["Not sure"]);
      return;
    }
    const filtered = services.filter((s) => s !== "Not sure");
    if (filtered.includes(srvId)) {
      setServices(filtered.filter((s) => s !== srvId));
    } else {
      setServices([...filtered, srvId]);
    }
  };

  const handleSimulatedPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).slice(0, 6 - uploadedPhotos.length);
      const newItems = files.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file)
      }));
      setUploadedPhotos([...uploadedPhotos, ...newItems]);
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(uploadedPhotos.filter((_, i) => i !== index));
  };

  // Step Navigations
  const handleNext = () => {
    setErrorMsg("");
    if (currentStep === 1) {
      if (services.length === 0) {
        setErrorMsg("Please select at least one service to proceed.");
        return;
      }
    }
    if (currentStep === 4) {
      if (!suburb.trim() || !postcode.trim() || !streetAddress.trim()) {
        setErrorMsg("Please enter your street address, suburb, and postcode.");
        return;
      }
    }
    if (currentStep === 5) {
      if (!name.trim()) {
        setErrorMsg("Please enter your name.");
        return;
      }
      // Australian phone format validation
      const cleanPhone = mobile.replace(/\s+/g, "");
      if (!cleanPhone || cleanPhone.length < 8) {
        setErrorMsg("Please enter a valid Australian mobile number (e.g. 0420 895 459).");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
    }

    setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleBack = () => {
    setErrorMsg("");
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg("");

    const payload: QuoteSubmissionPayload = {
      services,
      roofType,
      storeys,
      approxAge: roofAge,
      isLeaking,
      uploadedPhotoNames: uploadedPhotos.map((p) => p.name),
      suburb,
      postcode,
      streetAddress,
      preferredDate,
      preferredTimeWindow,
      urgency,
      name,
      mobile,
      email,
      preferredContactMethod: contactMethod,
      notes
    };

    try {
      const result = await submitQuote(payload);
      setSubmittedResult({
        referenceNumber: result.referenceNumber,
        submittedAt: result.submittedAt
      });
    } catch {
      setErrorMsg("Failed to submit quote. Please call 0420 895 459 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Top Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Quote Booking" }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Free · No-Obligation On-Site Quote</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5]">
            Book a Roof Inspection
          </h1>
          <p className="text-sm text-[#8A8A8A] max-w-xl mx-auto">
            Answer a few quick questions to help Marco and Arthur understand your roof. We provide upfront fixed pricing backed by high-resolution roof photos.
          </p>
        </div>

        {/* Confirmation Screen */}
        {submittedResult ? (
          <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D7192A]" />
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                Quote Request Confirmed
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
                We'll Call You Within 1 Business Day
              </h2>
              <p className="text-sm text-[#8A8A8A] max-w-md mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. Arthur or Miri is reviewing your property details for <span className="text-white">{streetAddress}, {suburb}</span>.
              </p>
            </div>

            {/* Reference Box */}
            <div className="max-w-md mx-auto bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-5 text-left text-xs space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-[#8A8A8A]">Quote Reference:</span>
                <span className="font-mono font-bold text-base text-[#D7192A]">{submittedResult.referenceNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Requested Service:</span>
                <span className="text-[#F5F5F5] font-medium">{services.join(", ")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Preferred Window:</span>
                <span className="text-[#F5F5F5]">{preferredDate} ({preferredTimeWindow})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Contact Method:</span>
                <span className="text-[#F5F5F5]">{contactMethod} ({mobile})</span>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="max-w-md mx-auto text-left space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]">
                What Happens Next:
              </div>
              <ul className="text-xs text-[#8A8A8A] space-y-1.5 list-disc pl-4">
                <li>We verify roof pitch and access using satellite aerial mapping.</li>
                <li>Miri will phone you to confirm your exact inspection time window.</li>
                <li>Marco or Arthur conducts a comprehensive on-site roof inspection.</li>
                <li>You receive a fixed-price written quote with detailed roof photos.</li>
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS_INFO.phonePrimary.tel}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now If Urgent: {BUSINESS_INFO.phonePrimary.display}</span>
              </a>

              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0A0A0A] border border-[#1F1F1F] text-[#F5F5F5] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#1F1F1F]"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Step Progress Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-[#D7192A]">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-[#8A8A8A]">
                  {currentStep === 1 && "1. Select Services"}
                  {currentStep === 2 && "2. Roof Details"}
                  {currentStep === 3 && "3. Upload Photos"}
                  {currentStep === 4 && "4. Property & Timing"}
                  {currentStep === 5 && "5. Contact Details"}
                  {currentStep === 6 && "6. Review & Submit"}
                </span>
              </div>

              <div className="w-full bg-[#0A0A0A] h-2 rounded-full overflow-hidden border border-[#1F1F1F]">
                <div
                  className="bg-[#D7192A] h-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Error Message Banner */}
            {errorMsg && (
              <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-xl flex items-center gap-2 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* STEP 1: SERVICE SELECTION */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                    Which services do you need?
                  </h2>
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    Select one or more that apply to your property.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = services.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleService(opt.id)}
                        className={`p-4 rounded-xl text-left border transition-all flex items-start gap-3 ${
                          isSelected
                            ? "bg-[#0A0A0A] border-[#D7192A] shadow-lg shadow-red-950/20"
                            : "bg-[#0A0A0A] border-[#1F1F1F] hover:border-neutral-700"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                            isSelected
                              ? "bg-[#D7192A] border-[#D7192A] text-white"
                              : "border-neutral-600 bg-[#141414]"
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-heading font-bold text-sm text-[#F5F5F5]">
                            {opt.title}
                          </div>
                          <div className="text-xs text-[#8A8A8A] mt-0.5 leading-relaxed">
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: ROOF DETAILS & URGENCY */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                    Tell us about your roof
                  </h2>
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    This helps us bring the correct profile tiles and safety ladders.
                  </p>
                </div>

                {/* Roof Type Cards */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-2">
                    Roof Material Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {["Terracotta tile", "Concrete tile", "Metal / Colorbond", "Slate", "Not sure"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setRoofType(type)}
                        className={`p-3.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                          roofType === type
                            ? "bg-[#0A0A0A] border-[#D7192A] text-white shadow-md"
                            : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A] hover:text-[#F5F5F5]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Storeys */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-2">
                    Building Storeys
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {["Single storey (1)", "Double storey (2)", "3+ Storeys"].map((st) => (
                      <button
                        type="button"
                        key={st}
                        onClick={() => setStoreys(st)}
                        className={`p-3.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                          storeys === st
                            ? "bg-[#0A0A0A] border-[#D7192A] text-white shadow-md"
                            : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A] hover:text-[#F5F5F5]"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Approximate Roof Age */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-2">
                    Approximate Roof Age
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {["Under 10 yrs", "10–20 yrs", "20–30 yrs", "30+ yrs"].map((age) => (
                      <button
                        type="button"
                        key={age}
                        onClick={() => setRoofAge(age)}
                        className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                          roofAge === age
                            ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                            : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Urgent Leak Callout */}
                <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-[#F5F5F5] flex items-center gap-2">
                      <span>Is your roof currently leaking into the ceiling?</span>
                      {isLeaking && (
                        <span className="bg-[#D7192A] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase animate-pulse">
                          Urgent Priority
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#8A8A8A] mt-0.5">
                      We reserve emergency inspection slots for active water damage.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsLeaking(true)}
                      className={`px-4 py-2 text-xs font-bold uppercase rounded-lg border transition-all ${
                        isLeaking
                          ? "bg-[#D7192A] border-[#D7192A] text-white shadow-lg shadow-red-950/40"
                          : "bg-[#141414] border-[#1F1F1F] text-[#8A8A8A]"
                      }`}
                    >
                      Yes (Urgent)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsLeaking(false)}
                      className={`px-4 py-2 text-xs font-bold uppercase rounded-lg border transition-all ${
                        !isLeaking
                          ? "bg-white text-black border-white"
                          : "bg-[#141414] border-[#1F1F1F] text-[#8A8A8A]"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: OPTIONAL PHOTO UPLOAD */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                    Upload Roof Photos (Optional)
                  </h2>
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    Photos help us quote faster. Take shots from your front yard, backyard, or ceiling stains.
                  </p>
                </div>

                {/* Upload Drag & Drop Area */}
                <label className="border-2 border-dashed border-[#1F1F1F] hover:border-[#D7192A] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-[#0A0A0A]/50 block">
                  <Upload className="w-10 h-10 text-[#8A8A8A] mb-3" />
                  <span className="font-heading font-bold text-sm text-[#F5F5F5] block">
                    Click to select or drag roof photos here
                  </span>
                  <span className="text-xs text-[#8A8A8A] mt-1 block">
                    Upload up to 6 images (PNG, JPG, HEIC). Max 15MB each.
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleSimulatedPhotoUpload}
                    className="hidden"
                  />
                </label>

                {/* Uploaded Thumbnails Preview */}
                {uploadedPhotos.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#8A8A8A]">
                      Uploaded Photos ({uploadedPhotos.length}/6):
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {uploadedPhotos.map((photo, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#0A0A0A]"
                        >
                          <img
                            src={photo.url}
                            alt={photo.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(idx)}
                            className="absolute top-1.5 right-1.5 p-1 bg-black/80 rounded-full text-white hover:text-red-400"
                            aria-label="Remove image"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-3 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl text-xs text-[#8A8A8A]">
                  💡 <strong>Tip:</strong> Don't climb onto the roof if you aren't equipped with safety harnesses! Photos from ground level or ladder height are completely fine.
                </div>
              </div>
            )}

            {/* STEP 4: PROPERTY & TIMING */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                    Property Address & Timing
                  </h2>
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    Where in Melbourne is the property located?
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 14 Elm Grove"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Melbourne Suburb *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bundoora or Doncaster"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        inputMode="numeric"
                        placeholder="e.g. 3083"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        min={minDateStr}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Time Window
                      </label>
                      <select
                        value={preferredTimeWindow}
                        onChange={(e) => setPreferredTimeWindow(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      >
                        <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                        <option value="Midday (12pm - 2pm)">Midday (12pm - 2pm)</option>
                        <option value="Afternoon (2pm - 5pm)">Afternoon (2pm - 5pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-2">
                      How soon do you need the work completed?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {["ASAP (Urgent)", "Within a month", "1–3 months", "Just planning"].map((urg) => (
                        <button
                          type="button"
                          key={urg}
                          onClick={() => setUrgency(urg)}
                          className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                            urgency === urg
                              ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                              : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                          }`}
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: CONTACT DETAILS */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                    Your Contact Details
                  </h2>
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    We'll contact you to confirm inspection time and send the photo quote.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Henderson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Australian Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0420 895 459"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com.au"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: "Call", label: "Phone Call (Recommended)" },
                        { id: "SMS", label: "Text / SMS" },
                        { id: "Email", label: "Email" }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setContactMethod(item.id as "Call" | "SMS" | "Email")}
                          className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                            contactMethod === item.id
                              ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                              : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-1">
                      Notes or Specific Concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Dogs on property, side gate combination, specific ceiling water marks..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6: REVIEW & SUBMIT */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                    Review Your Details
                  </h2>
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    Check your summary before submitting to Marco and Arthur.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-6 space-y-4 text-xs">
                  <div className="flex justify-between items-start pb-3 border-b border-[#1F1F1F]">
                    <div>
                      <span className="text-[#8A8A8A] block">Selected Services:</span>
                      <strong className="text-base text-[#F5F5F5]">{services.join(", ")}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-[#D7192A] hover:underline font-bold"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="flex justify-between items-start pb-3 border-b border-[#1F1F1F]">
                    <div>
                      <span className="text-[#8A8A8A] block">Roof Configuration:</span>
                      <strong className="text-[#F5F5F5]">
                        {roofType} · {storeys} · {roofAge}
                        {isLeaking && " · Leaking (Urgent Priority)"}
                      </strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-[#D7192A] hover:underline font-bold"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="flex justify-between items-start pb-3 border-b border-[#1F1F1F]">
                    <div>
                      <span className="text-[#8A8A8A] block">Property Location:</span>
                      <strong className="text-[#F5F5F5]">
                        {streetAddress}, {suburb} VIC {postcode}
                      </strong>
                      <div className="text-[#8A8A8A] mt-0.5">
                        Inspection: {preferredDate} ({preferredTimeWindow}) · Urgency: {urgency}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="text-[#D7192A] hover:underline font-bold"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[#8A8A8A] block">Contact Person:</span>
                      <strong className="text-[#F5F5F5]">{name}</strong>
                      <div className="text-[#8A8A8A] mt-0.5">
                        {mobile} · {email} · Preferred by {contactMethod}
                      </div>
                      {notes && <div className="text-[#8A8A8A] mt-1 italic">"{notes}"</div>}
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(5)}
                      className="text-[#D7192A] hover:underline font-bold"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl flex items-center gap-3 text-xs text-[#8A8A8A]">
                  <ShieldCheck className="w-5 h-5 text-[#D7192A] shrink-0" />
                  <span>
                    No spam guarantee. We only use your phone number to coordinate the on-site quote and photo report.
                  </span>
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1F1F1F]">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-3 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] text-[#F5F5F5] hover:bg-[#1F1F1F] text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3.5 rounded-xl bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-red-950/40"
                >
                  Next Step
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="px-8 py-3.5 rounded-xl bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-red-950/50 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
