# Node.js CI/CD with Azure DevOps, Docker, and Azure VM

This project demonstrates how to set up a **CI/CD pipeline** for a Node.js application using:

- **Azure DevOps Pipelines**  
- **Docker** for containerization  
- **Azure Container Registry (ACR)** for image storage  
- **Azure VM** for deployment  

---

## 📌 Project Overview
The goal of this project was to build and deploy a Node.js application automatically using a robust CI/CD pipeline.  

### Pipeline Flow
1. **Build Stage**  
   - Login to Azure using a Service Principal  
   - Build Docker image from source code  
   - Push Docker image to **Azure Container Registry (ACR)**  

2. **Deploy Stage**  
   - Connect to Azure VM via SSH  
   - Login to ACR from VM  
   - Pull the latest Docker image  
   - Stop & remove any old containers  
   - Run the new container  

3. **Result**  
   - Application accessible in browser via VM Public IP  

---

## Tech Stack
- **Node.js** (Backend application)
- **Docker** (Containerization)
- **Azure DevOps** (CI/CD automation)
- **Azure Container Registry (ACR)** (Image storage)
- **Azure VM (Linux)** (Hosting environment)
