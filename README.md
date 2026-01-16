# Full-Stack Monitoring Dashboard Skills Test

**Estimated Time:** 8-10 hours  
**Technologies:** Go (Gin), Angular 18+, MariaDB, Docker

---

## Project Overview

Build a simplified monitoring application that checks website availability and displays results in a real-time dashboard. This test evaluates your full-stack capabilities across our primary tech stack: Go/Gin backend, Angular 18+ frontend with standalone components, MariaDB database, and Docker.

---

## Part 1: Requirements & Tasks

### Backend Requirements (Go + MariaDB) - 3-4 hours

#### 1. REST API Service (Gin Framework)

Implement the following endpoints:

**Monitor Management:**
- `POST /api/monitors` - Create a new website monitor (URL, check interval, name)
- `GET /api/monitors` - List all configured monitors
- `GET /api/monitors/:id` - Get specific monitor details with latest check status
- `DELETE /api/monitors/:id` - Remove a monitor

**Check Operations:**
- `POST /api/monitors/:id/check` - Manually trigger a health check for a monitor
- `GET /api/monitors/:id/checks` - Get recent check results (last 50)
- `GET /api/monitors/:id/stats` - Get uptime percentage and average response time (last 24 hours)

**Authentication:**
- `POST /auth/login` - Return JWT token (hardcoded credentials: `admin`/`password123`)
- Implement JWT middleware to protect all `/api/*` endpoints

#### 2. Health Check Implementation

Implement HTTP checking logic that:
- Makes an HTTP GET request to the monitor's configured URL
- Records the HTTP status code and response time in milliseconds
- Determines if site is "up" (status 200-299) or "down" (anything else or error)
- Saves check result to database
- Returns the check result in JSON format

**Implementation Options:**
- **Option A:** Manual trigger only (via `POST /api/monitors/:id/check` endpoint)
- **Option B:** Background timer using `time.Ticker` that checks all monitors every 60 seconds

#### 3. Database Design (MariaDB)

**Design Freedom:**
You have complete control over your database schema. The provided `schema.sql` includes two basic tables (`monitors` and `checks`) as a starting point, but **you are not limited to this structure**. Feel free to:
- Add additional tables if your design benefits from normalization
- Modify the existing table structures
- Add lookup tables, junction tables, or any other schema patterns you prefer
- Restructure the relationships as you see fit

**The key requirement is that your schema supports the API functionality and demonstrates sound database design principles.**

**Required SQL Queries (write raw SQL, no ORM):**
1. CREATE TABLE statements with appropriate indexes
2. Basic CRUD operations for monitors
3. **JOIN query:** Get all monitors with their most recent check status
4. **Aggregation query:** Calculate uptime percentage for a monitor:
   ```sql
   SELECT monitor_id, 
          (SUM(CASE WHEN is_up = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) as uptime_percentage
   FROM checks 
   WHERE checked_at > DATE_SUB(NOW(), INTERVAL 24 HOUR) 
   GROUP BY monitor_id
   ```
5. Query to get average response time per monitor over the last 24 hours

**Deliverables:**
- Add appropriate indexes to `database/schema.sql`
- Add comments explaining why you chose specific indexes and how they improve performance
- Consider: Which columns will be frequently queried? Which support JOINs?

#### 4. Important: Website Monitoring & Testing

Many production websites use bot protection (Cloudflare, rate limiting, etc.) that will **block automated health checks**.

**For testing your application, use:**

1. **Mock service in docker-compose (Included):**
   - `http://mock-website/status/200` - Always returns 200 (up)
   - `http://mock-website/status/500` - Always returns 500 (down)
   - `http://mock-website/delay/2` - Returns 200 after 2-second delay

2. **Public testing APIs:**
   - `https://httpstat.us/200` - Always returns 200
   - `https://httpstat.us/random/200,500` - Randomly returns 200 or 500

3. **Simple sites without protection:**
   - `http://example.com`
   - `http://info.cern.ch`

**❌ Do NOT test against:** Google, Facebook, GitHub, or any site behind Cloudflare protection.

---

### Frontend Requirements (Angular 18+) - 4-5 hours

#### 1. Application Views

Create an Angular 18+ application using **standalone components** with these views:

**Monitor List View (Main Dashboard):**
- Display all monitors in a Bootstrap 5 responsive grid or table
- Show for each monitor:
  - Monitor name and URL
  - Current status with color-coded indicator (🟢 Up / 🔴 Down)
  - Last check timestamp (formatted: "2 minutes ago")
  - Uptime percentage (last 24 hours)
- "Add Monitor", "Check Now", "Delete", and "View Details" buttons
- Auto-refresh every 30 seconds

**Monitor Detail View:**
- Route: `/monitors/:id`
- Display monitor configuration and statistics
- Line chart showing response times (last 50 checks)
- Table of recent check history
- "Back to Dashboard" and "Check Now" buttons

**Add Monitor Form:**
- Reactive form with validation:
  - Monitor Name: Required, 3-50 characters
  - URL: Required, valid HTTP/HTTPS format
  - Check Interval: Number, 30-3600 seconds
- Display validation errors inline

**Login View:**
- Simple login form (username/password)
- Store JWT token in localStorage
- Redirect to dashboard on success

#### 2. Technical Implementation

**Services & API:**
- `AuthService` - Login, token storage, logout
- `MonitorService` - All monitor-related API calls
- `CheckService` - Check operations and statistics
- HTTP interceptor to attach JWT token
- Proper error handling

**State Management:**
- Use RxJS observables throughout
- Implement polling to refresh every 30 seconds
- Demonstrate RxJS operators: `map`, `catchError`, `switchMap`, `interval`, `takeUntil`
- Proper unsubscription

**Routing:**
- Angular Router with route guards
- `AuthGuard` to protect dashboard routes

**Visualization:**
- Use Chart.js or similar for line charts
- Show response times over time

#### 3. Styling & UX

- Bootstrap 5 responsive layout
- Mobile-friendly (test at 320px, 768px, 1024px)
- Loading spinners during API calls
- Empty states and error messages
- Confirmation dialogs for delete actions

---

### Documentation Requirements - 1 hour

Your README must include:
1. **Setup Instructions** - Step-by-step commands
2. **Running the Application** - URLs and credentials
3. **API Documentation** - Endpoints with examples
4. **Database Schema** - Tables, relationships, indexing decisions
5. **Design Decisions** - Your approach and tradeoffs
6. **Known Limitations** - What you'd improve with more time
7. **Testing** - How to verify it works

---

### Evaluation Criteria

**Backend (40 points):**
- API endpoints functional (12 pts)
- Database design and SQL (10 pts)
- Health check implementation (8 pts)
- JWT authentication (5 pts)
- Docker setup (3 pts)
- Code quality (2 pts)

**Frontend (40 points):**
- Component architecture (12 pts)
- API integration & RxJS (10 pts)
- Visualization & UX (8 pts)
- Form validation (6 pts)
- Responsive design (4 pts)

**Documentation (20 points):**
- README completeness (10 pts)
- Git commit history (5 pts)
- Code comments (5 pts)

**Bonus Challenges (Optional):**
- WebSocket for real-time updates
- Export to CSV
- Alert thresholds
- Unit tests
- Pagination

---

## Part 2: Starter Project Setup

This starter repository has the project structure, dependencies, and basic configuration already set up. Your job is to implement the core functionality by completing the TODO items throughout the codebase.

### What's Already Done

✅ **Backend:**
- Complete Go project structure with Gin framework
- Database connection setup with connection pooling
- Docker configuration for MariaDB
- Route definitions and handler signatures
- Model structs defined
- JWT middleware structure
- Health check service skeleton
- Basic database schema

✅ **Frontend:**
- Complete Angular 18 project with standalone components
- All component structures created
- TypeScript interfaces for all models
- Service skeletons with method signatures
- Routing configuration
- Bootstrap 5 styling foundation
- Form validation setup
- HTML templates with proper structure

✅ **Infrastructure:**
- docker-compose.yml ready to run
- Environment variable configuration
- Mock website service for testing

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ and npm
- Go 1.21+ (optional, if running backend outside Docker)

### Quick Start

1. **Start the backend and database:**
   ```bash
   docker-compose up -d --build
   ```
   This will start:
   - MariaDB on `localhost:5001`
   - Go backend on `localhost:3000`
   - Mock website on `localhost:8080`

2. **Start the frontend:**
   ```bash
   cd frontend
   npm install
   ng serve
   ```
   Frontend runs on `http://localhost:4200`

3. **Test credentials:**
   - Username: `admin`
   - Password: `password123`

### What You Need to Implement

Look for `// TODO:` comments throughout the codebase for detailed guidance.

**Backend TODOs (`/backend`):**
1. Add indexes to `database/schema.sql` with explanation comments
2. Implement CRUD methods in `models/monitor.go` and `models/check.go` (raw SQL)
3. Complete handler logic in `handlers/auth.go`, `handlers/monitors.go`, `handlers/checks.go`
4. Implement HTTP health checking in `services/health_check.go`
5. Complete JWT validation in `middleware/auth.go`

**Frontend TODOs (`/frontend/src/app`):**
1. Implement HTTP calls in all service files (`services/*.ts`)
2. Complete token attachment in `api.interceptor.ts`
3. Implement route protection in `auth.guard.ts`
4. Complete component logic in all component files (`components/*/*.ts`)

### Development Tips

**Start Simple:**
1. Get one endpoint working end-to-end first
2. Test with curl or Postman as you go
3. Then move to the next feature

**Backend Development:**
- Access database: `docker exec -it monitor-db mariadb -u monitoruser -pmonitorpass monitoring`
- View logs: `docker-compose logs -f backend`
- Rebuild: `docker-compose up -d --build`

**Frontend Development:**
- Angular auto-reloads on changes
- Check browser console for errors
- Use Chrome DevTools Network tab

**Recommended Order:**
1. Backend auth (login + JWT middleware)
2. Backend monitor CRUD
3. Backend health check
4. Frontend auth + login
5. Frontend monitor list
6. Frontend add monitor
7. Frontend monitor detail
8. Polish and error handling

### Project Structure

```
skills-test/
├── backend/
│   ├── config/          # Database connection (✅ complete)
│   ├── database/        # Schema file (🟡 needs indexes)
│   ├── handlers/        # API endpoints (🟡 needs implementation)
│   ├── middleware/      # JWT auth (🟡 needs implementation)
│   ├── models/          # Data models (🟡 needs SQL queries)
│   ├── services/        # Business logic (🟡 needs implementation)
│   └── main.go          # ✅ Complete
│
├── frontend/
│   └── src/app/
│       ├── components/    # UI components (🟡 needs logic)
│       ├── guards/        # Route guards (🟡 needs implementation)
│       ├── models/        # TypeScript interfaces (✅ complete)
│       └── services/      # API services (🟡 needs HTTP calls)
│
└── docker-compose.yml   # ✅ Complete
```

### Common Issues

**Port already in use:**
- Change database port in `docker-compose.yml`
- Edit `ports: - "5001:3306"` to use different port
- Run `docker-compose down && docker-compose up -d --build`

**Backend won't start:**
- Check database is healthy: `docker-compose ps`
- View logs: `docker-compose logs backend`
- Wait for database to initialize, then restart: `docker-compose restart backend`

**Frontend can't reach API:**
- Verify backend is running on port 3000
- Check CORS configuration in `main.go`

### Completion Checklist

**Backend:**
- [ ] Database indexes added and documented
- [ ] Monitor CRUD operations working
- [ ] Health check performs HTTP requests
- [ ] JWT authentication working
- [ ] Check history retrieval working
- [ ] Stats aggregation query working
- [ ] Error handling implemented

**Frontend:**
- [ ] Login flow working
- [ ] Auth guard protecting routes
- [ ] HTTP interceptor adding tokens
- [ ] Monitor list displays and refreshes
- [ ] Polling implemented (every 30 seconds)
- [ ] Add monitor form validates and submits
- [ ] Monitor detail shows check history
- [ ] Chart displays response times
- [ ] Manual check trigger working
- [ ] Delete monitor with confirmation
- [ ] Loading states and error handling
- [ ] Responsive design

---

**Good luck! Focus on getting things working, then polish. We're excited to see what you build! 🚀**
