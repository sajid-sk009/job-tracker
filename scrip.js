let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "Not Applied",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "Not Applied",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations.",
    status: "Not Applied",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design scalable backend systems using Python and AWS.",
    status: "Not Applied",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces.",
    status: "Not Applied",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise applications with JavaScript.",
    status: "Not Applied",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Work on startup core platform using Node & React.",
    status: "Not Applied",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build scalable web apps using React & TypeScript.",
    status: "Not Applied",
  },
];

const jobContainer = document.getElementById("jobs-container");
const totalJobNumber = document.getElementById("total-job-number");
const updateJobCount = document.getElementById("update-job-count");
const btnAll = document.getElementById("btn-all");
const btnInterview = document.getElementById("btn-interview");
const btnRejected = document.getElementById("btn-rejected");
const totalInterview = document.getElementById("total-interview");
const totalRejected = document.getElementById("total-rejected");

const emptyPage=`  <div
        class="flex flex-col justify-center items-center bg-white px-[40px] py-[60px] rounded-[8px] space-y-4"
      >
        <img src="./Images/File.png" alt="" />
        <div class="spacey-2 text-center">
          <h1 class="font-semibold text-[24px] text-[#002C5C]">
            No jobs available
          </h1>
          <p class="text-[16px] text-[#64748B]">Check back soon for new job opportunities</p>
        </div>
      </div>`



let activeTab = "all";

const renderAllJobs = () => {
  jobContainer.innerHTML = "";
  if (activeTab === "all") {
    for (let i = 0; i < jobs.length; i++) {
      const card = document.createElement("div");
      card.innerHTML = `
        <div
          class="bg-[#FFFFFF] p-[24px] rounded-[8px] flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center md:items-start lg:items-start gap-5"
        >
          <div>
            <h1 class="font-semibold text-[18px] text-[#002C5C]">
              ${jobs[i].companyName}
            </h1>
            <h3 class="text-[16px] text-[#64748B]"> ${jobs[i].position}</h3>
            <h5 class="text-[14px] text-[#64748B] mt-2">
              ${jobs[i].location} • ${jobs[i].type} • ${jobs[i].salary}
            </h5>
            <button
              class="rounded-[4px] px-[12px] py-[8px]  text-[14px] font-medium mt-2 ${jobs[i].status === "interview" ? "bg-[#10B981] text-white" : jobs[i].status === "rejected" ? " bg-[#EF4444] text-white" : "bg-[#EEF4FF] text-[#002C5C]"}"
            >
              ${jobs[i].status}
            </button>
            <p class="text-[14px] text-[#323B49]">
              ${jobs[i].description}
            </p>
            <div class="mt-1 space-x-2">
              <button
                class="outline-solid outline-1 outline-[#10B981] px-[9px] py-[6px] rounded-[4px] text-[#10B981] font-semibold text-[14px] hover:bg-[#10B981] hover:text-white"
                onclick="changeStatus(${jobs[i].id},'interview')"
              >
                INTERVIEW
              </button>
              <button
                class="outline-solid outline-1 outline-[#EF4444] px-[9px] py-[6px] rounded-[4px] text-[#EF4444] font-semibold text-[14px] hover:bg-[#EF4444] hover:text-white"
                 onclick="changeStatus(${jobs[i].id},'rejected')"
              >
                Rejected
              </button>
            </div>
          </div>
          <div onclick="deleteJob(${jobs[i].id})">
            <img src="./Images/Trash.png" alt="" />
          </div>
        </div>
        `;

      jobContainer.appendChild(card);
    }
    updateJobCount.innerText = `${jobs.length} jobs`;
  }

  if (activeTab === "interview") {
    let count = 0;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].status === "interview") {
        count++;
        const card = document.createElement("div");
        card.innerHTML = `
        <div
          class="bg-[#FFFFFF] p-[24px] rounded-[8px] flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center md:items-start lg:items-start gap-5"
        >
          <div>
            <h1 class="font-semibold text-[18px] text-[#002C5C]">
              ${jobs[i].companyName}
            </h1>
            <h3 class="text-[16px] text-[#64748B]"> ${jobs[i].position}</h3>
            <h5 class="text-[14px] text-[#64748B] mt-2">
              ${jobs[i].location} • ${jobs[i].type} • ${jobs[i].salary}
            </h5>
            <button
              class="rounded-[4px] px-[12px] py-[8px]  text-[14px] font-medium mt-2 ${jobs[i].status === "interview" ? "bg-[#10B981] text-white" : jobs[i].status === "rejected" ? " bg-[#EF4444] text-white" : "bg-[#EEF4FF] text-[#002C5C]"}"
            >
              ${jobs[i].status}
            </button>
            <p class="text-[14px] text-[#323B49]">
              ${jobs[i].description}
            </p>
            <div class="mt-1 space-x-2">
              <button
                class="outline-solid outline-1 outline-[#10B981] px-[9px] py-[6px] rounded-[4px] text-[#10B981] font-semibold text-[14px] hover:bg-[#10B981] hover:text-white"
                onclick="changeStatus(${jobs[i].id},'interview')"
              >
                INTERVIEW
              </button>
              <button
                class="outline-solid outline-1 outline-[#EF4444] px-[9px] py-[6px] rounded-[4px] text-[#EF4444] font-semibold text-[14px] hover:bg-[#EF4444] hover:text-white"
                 onclick="changeStatus(${jobs[i].id},'rejected')"
              >
                Rejected
              </button>
            </div>
          </div>
          <div onclick="deleteJob(${jobs[i].id})">
            <img src="./Images/Trash.png" alt="" />
          </div>
        </div>
        `;
        jobContainer.appendChild(card);
      }
    }
    updateJobCount.innerText = `${count}/${jobs.length} jobs`;
    if(count===0){
       jobContainer.innerHTML= emptyPage
    }
  }

  if (activeTab === "rejected") {
    let count = 0;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].status === "rejected") {
        count++;
        const card = document.createElement("div");
        card.innerHTML = `
        <div
          class="bg-[#FFFFFF] p-[24px] rounded-[8px] flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center md:items-start lg:items-start gap-5"
        >
          <div>
            <h1 class="font-semibold text-[18px] text-[#002C5C]">
              ${jobs[i].companyName}
            </h1>
            <h3 class="text-[16px] text-[#64748B]"> ${jobs[i].position}</h3>
            <h5 class="text-[14px] text-[#64748B] mt-2">
              ${jobs[i].location} • ${jobs[i].type} • ${jobs[i].salary}
            </h5>
            <button
              class="rounded-[4px] px-[12px] py-[8px]  text-[14px] font-medium mt-2 ${jobs[i].status === "interview" ? "bg-[#10B981] text-white" : jobs[i].status === "rejected" ? " bg-[#EF4444] text-white" : "bg-[#EEF4FF] text-[#002C5C]"}"
            >
              ${jobs[i].status}
            </button>
            <p class="text-[14px] text-[#323B49]">
              ${jobs[i].description}
            </p>
            <div class="mt-1 space-x-2">
              <button
                class="outline-solid outline-1 outline-[#10B981] px-[9px] py-[6px] rounded-[4px] text-[#10B981] font-semibold text-[14px] hover:bg-[#10B981] hover:text-white"
                onclick="changeStatus(${jobs[i].id},'interview')"
              >
                INTERVIEW
              </button>
              <button
                class="outline-solid outline-1 outline-[#EF4444] px-[9px] py-[6px] rounded-[4px] text-[#EF4444] font-semibold text-[14px] hover:bg-[#EF4444] hover:text-white"
                 onclick="changeStatus(${jobs[i].id},'rejected')"
              >
                Rejected
              </button>
            </div>
          </div>
          <div onclick="deleteJob(${jobs[i].id})">
            <img src="./Images/Trash.png" alt="" />
          </div>
        </div>
        `;
        jobContainer.appendChild(card);
      }
    }
    updateJobCount.innerText = `${count}/${jobs.length} jobs`;
     if(count===0){
       jobContainer.innerHTML= emptyPage
    }
  }

  let countInterview = 0;
  let countRejected = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview") {
      countInterview++;
    } else if (jobs[i].status === "rejected") {
      countRejected++;
    }
  }
  totalInterview.innerText = countInterview;
  totalRejected.innerText = countRejected;
  totalJobNumber.innerText = jobs.length;
};

renderAllJobs();

btnAll.addEventListener("click", () => {
  btnAll.className =
    "bg-[#3B82F6] px-[22px] py-[8px] rounded-[4px] text-[12px] font-semibold text-white";
  btnInterview.className =
    "bg-[#FFFFFF] px-[22px] py-[8px] rounded-[4px] text-[12px] font-medium text-[#64748B] border border-[#F1F2F4]";
  btnRejected.className =
    "bg-[#FFFFFF] px-[22px] py-[8px] rounded-[4px] text-[12px] font-medium text-[#64748B] border border-[#F1F2F4]";
  activeTab = "all";
  renderAllJobs();
});

btnInterview.addEventListener("click", () => {
  btnInterview.className =
    "bg-[#3B82F6] px-[22px] py-[8px] rounded-[4px] text-[12px] font-semibold text-white";
  btnAll.className =
    "bg-[#FFFFFF] px-[22px] py-[8px] rounded-[4px] text-[12px] font-medium text-[#64748B] border border-[#F1F2F4]";
  btnRejected.className =
    "bg-[#FFFFFF] px-[22px] py-[8px] rounded-[4px] text-[12px] font-medium text-[#64748B] border border-[#F1F2F4]";
  activeTab = "interview";
  renderAllJobs();
});

btnRejected.addEventListener("click", () => {
  btnRejected.className =
    "bg-[#3B82F6] px-[22px] py-[8px] rounded-[4px] text-[12px] font-semibold text-white";
  btnAll.className =
    "bg-[#FFFFFF] px-[22px] py-[8px] rounded-[4px] text-[12px] font-medium text-[#64748B] border border-[#F1F2F4]";
  btnInterview.className =
    "bg-[#FFFFFF] px-[22px] py-[8px] rounded-[4px] text-[12px] font-medium text-[#64748B] border border-[#F1F2F4]";
  activeTab = "rejected";
  renderAllJobs();
});

const changeStatus = (id, status) => {
  for (let i = 0; i < jobs.length; i++) {
    if (id === jobs[i].id) {
      jobs[i].status = status;
    }
  }

  renderAllJobs();
};

const deleteJob = (id) => {
  let updateJobs = [];
  for (let i = 0; i < jobs.length; i++) {
    if (id !== jobs[i].id) {
      updateJobs.push(jobs[i]);
    }
  }
  jobs = updateJobs;
  renderAllJobs();
};
