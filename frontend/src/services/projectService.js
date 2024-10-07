const API_URL = "http://localhost:3000";

async function fetchAllProjects() {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function fetchProject(id) {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function createProject(projectData) {
  const formData = new FormData();
  formData.append("project[title]", projectData.title);
  formData.append("project[description]", projectData.description);
  formData.append("project[date]", projectData.date);

  projectData.images.forEach((image) => {
    formData.append("project[images][]", image);
  });

  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

async function updateProject(id, projectData) {
  console.log(projectData);
  const formData = new FormData();
  formData.append("project[title]", projectData.title);
  formData.append("project[description]", projectData.description);
  formData.append("project[date]", projectData.date);

  projectData.images.forEach((image) => {
    formData.append("project[images][]", image);
  });

  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function deleteProject(id) {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  if (response.status === 204) {
    return null;
  }
  return response.json();
}

export {
  createProject,
  deleteProject,
  fetchAllProjects,
  fetchProject,
  updateProject,
};
