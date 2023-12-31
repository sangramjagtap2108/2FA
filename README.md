# Scalable Microblogging Platform with Cloud-Native Architecture

## Project Overview

This semester project involves the development of a scalable microblogging platform leveraging cloud-native architecture. The platform, akin to Twitter, allows users to create, edit, delete, and view posts up to 280 characters with image support. It includes robust user interaction features such as following other users, managing profiles, and an administrative section for user moderation.

### Official Features Implemented
1. **User Management**: Includes user sign-ups, sign-in, and password recovery workflows.
2. **Content Posting**: Allows posting, editing, and deleting of 280-character posts with image support.
3. **Social Interaction**: Users can follow each other.
4. **Feed View**: Displays posts from followed users in chronological order.
5. **Profile Management**: A dedicated section for users to manage their profiles.
6. **Admin Section**: Enables moderation of user activities.

### Technical Specifications
- **APIs**: Powered by OpenAPI spec-based REST APIs. Microservices architecture has been implemented.
- **Single Sign-On (SSO)**: Implemented using Keycloak, supporting federated sign-up (e.g., Google, Facebook, Apple).
- **Two-Factor Authentication**: Enabled through Keycloak or similar systems.
- **CI/CD Workflow**: Robust CI/CD practices for streamlined development and deployment.
- **Repository**: All code is managed in this repository.
- **Database Systems**: NoSQL database is utilized.
- **Caching System**: Employed caching mechanisms using Redis.
- **Queues/Streams**: Integration of queue for efficient data handling.
- **Observability Tools**: Comprehensive logs, metrics, and traces implementation using Splunk.
- **BI Dashboard**: A business intelligence dashboard showcasing key metrics and data.
- **Docker Deployment**: All application components are deployable via Docker.


### Installations 
- Node - (16.20.2)
- Postgres SQL
- Redis
  
### How to Run
- Detailed instructions on setting up and running the platform will be included here.
1. Backend

- cd server
- npm install or yarn
- npm run watch or yarn watch
- npm run dev or yarn dev

2. Frontend

- cd web
- npm install or yarn
- export NODE_OPTIONS=--openssl-legacy-provider  or set NODE_OPTIONS=--openssl-legacy-provider
- npm run gen or yarn gen
- npm run build
- npm run dev
 
### Team

- Omkar Nagarkar
- Sangram Jagtap
- Purvil Patel
- Atharva Jadhav
  
### License
- This project is licensed under the MIT License.

Troubleshooting:     
- If you encounter any issues with the Docker setup, ensure Docker is running correctly on your system and you have the necessary permissions.     
- For issues related to Python dependencies, ensure you are using the correct version of Python and have all the required packages installed.    

---

This README provides a detailed overview of the microblogging platform project, outlining personal contributions, implemented features, technical specifications, and additional project details. It serves as a guide for understanding the project's scope, structure, and functionalities.
