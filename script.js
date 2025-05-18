const initialTasks = [
    {
      id: 1,
      title: "Launch Epic Career 🚀",
      description: "Create a killer Resume",
      status: "todo",
    },
    {
      id: 2,
      title: "Master JavaScript 💛",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    },
    {
      id: 3,
      title: "Keep on Going 🏆",
      description: "You're almost there",
      status: "doing",
    },
  
    {
      id: 11,
      title: "Learn Data Structures and Algorithms 📚",
      description:
        "Study fundamental data structures and algorithms to solve coding problems efficiently",
      status: "todo",
    },
    {
      id: 12,
      title: "Contribute to Open Source Projects 🌐",
      description:
        "Gain practical experience and collaborate with others in the software development community",
      status: "done",
    },
    {
      id: 13,
      title: "Build Portfolio Projects 🛠️",
      description:
        "Create a portfolio showcasing your skills and projects to potential employers",
      status: "done",
    },
  ];


  const modal = document.createElement("div");
  Object.assign(modal.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  });
  document.body.appendChild(modal);
  
  // ========= MODAL CREATION =========
  function createModal(taskElement) {
    const titleText = taskElement.textContent.trim();
    const originalColumn = taskElement.closest(".column");
    const status = getStatusFromColumn(originalColumn);
  
    const modalContent = document.createElement("div");
    Object.assign(modalContent.style, {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "10px",
      width: "400px",
      position: "relative"
    });
  
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    Object.assign(closeBtn.style, {
      position: "absolute",
      top: "10px",
      right: "15px",
      fontSize: "24px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "#888"
    });
    closeBtn.onclick = () => {
      modal.style.display = "none";
      console.log("❌ Modal closed by close button.");
    };
  
    const heading = document.createElement("h3");
    heading.textContent = "Task";
    heading.style.marginBottom = "20px";
  
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    Object.assign(titleInput, {
      type: "text",
      value: titleText
    });
    Object.assign(titleInput.style, inputStyle());
  
    const descLabel = document.createElement("label");
    descLabel.textContent = "Description";
    const descInput = document.createElement("textarea");
    descInput.value = taskElement.dataset.description || "";
    Object.assign(descInput.style, textareaStyle());
  
    const statusLabel = document.createElement("label");
    statusLabel.textContent = "Status";
    const statusSelect = document.createElement("select");
    ["todo", "doing", "done"].forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      if (s === status) opt.selected = true;
      statusSelect.appendChild(opt);
    });
    Object.assign(statusSelect.style, inputStyle());
  
    const btnContainer = document.createElement("div");
    Object.assign(btnContainer.style, {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px"
    });
  
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save Changes";
    Object.assign(saveBtn.style, buttonStyle("#635FC7"));
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Task";
    Object.assign(deleteBtn.style, buttonStyle("#EA5555"));
  
    saveBtn.onclick = () => {
      taskElement.textContent = titleInput.value;
      taskElement.dataset.description = descInput.value;
  
      const newStatus = statusSelect.value;
      const newCol = document.querySelector(`.${newStatus}-dot`).closest(".column");
      const taskList = newCol.querySelector(".tasks");
      taskList.appendChild(taskElement);
      modal.style.display = "none";
  
      // ✅ Log changes
      console.log("✅ Task updated:");
      console.log("Title:", titleInput.value);
      console.log("Description:", descInput.value);
      console.log("New Status:", newStatus);
    };
  
    deleteBtn.onclick = () => {
      taskElement.remove();
      modal.style.display = "none";
  
      // 🗑️ Log deletion
      console.log("🗑️ Task deleted:", titleText);
    };
  
    btnContainer.appendChild(saveBtn);
    btnContainer.appendChild(deleteBtn);
  
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(heading);
    modalContent.appendChild(titleLabel);
    modalContent.appendChild(titleInput);
    modalContent.appendChild(descLabel);
    modalContent.appendChild(descInput);
    modalContent.appendChild(statusLabel);
    modalContent.appendChild(statusSelect);
    modalContent.appendChild(btnContainer);
  
    modal.innerHTML = "";
    modal.appendChild(modalContent);
    modal.style.display = "flex";
  
    // 🧾 Log modal open
    console.log("🧾 Modal opened for task:", titleText);
  }
  
  // ========= HELPERS =========
  function getStatusFromColumn(column) {
    if (column.querySelector(".todo-dot")) return "todo";
    if (column.querySelector(".doing-dot")) return "doing";
    if (column.querySelector(".done-dot")) return "done";
    return "todo";
  }
  
  function inputStyle() {
    return {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px"
    };
  }
  
  function textareaStyle() {
    const base = inputStyle();
    base.height = "80px";
    return base;
  }
  
  function buttonStyle(bgColor) {
    return {
      padding: "10px 20px",
      backgroundColor: bgColor,
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold"
    };
  }
  
  // ========= ACTIVATE MODAL ON TASK CLICK =========
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".task").forEach((task) => {
      task.addEventListener("click", () => createModal(task));
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        console.log("❌ Modal closed by clicking outside.");
      }
    });
  });
  