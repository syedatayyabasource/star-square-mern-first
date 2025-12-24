import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import toast from 'react-hot-toast';
import TodoList from '../Components/TodoList.jsx'; 
import ProfileForm from '../Forms/ProfileForm.jsx'; 

const Dashboard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [searchFocused, setSearchFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dbStatus, setDbStatus] = useState("Connecting...");
  const [liveStats, setLiveStats] = useState({ bookings: "0", fleet: "0", uptime: "0%", staff: "0/0" });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") navigate("/login");
    fetchDashboardStats();
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/stats');
      setLiveStats(res.data);
      setDbStatus("Online");
    } catch (error) {
      setDbStatus("Offline");
      toast.error("Cloud Connection Interrupted");
    }
  };

  const handleSyncData = async () => {
    setLoading(true);
    await fetchDashboardStats();
    setTimeout(() => {
      toast.success("Nodes Synced Successfully");
      setLoading(false);
    }, 800);
  };

  const statsDisplay = [
    { label: "Total Bookings", value: liveStats.bookings, color: "#f4c430", trend: "+12%", icon: "bi-gem" },
    { label: "Active Fleet", value: liveStats.fleet, color: "#10b981", trend: "Stable", icon: "bi-truck" },
    { label: "System Uptime", value: liveStats.uptime, color: "#3b82f6", trend: "99.9%", icon: "bi-lightning-charge" },
    { label: "Staff Online", value: liveStats.staff, color: "#8b5cf6", trend: "Active", icon: "bi-people" }
  ];

  return (
    <div className="dashboard-root">
      {/* --- SIDEBAR --- */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">SS</div>
          <span className="brand-text">STAR<span>SQUARE</span></span>
        </div>

        <div className="user-card">
          <div className="user-avatar">
            <img src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611734.jpg" alt="Admin" />
            <span className="status-dot"></span>
          </div>
          <h6 className="user-name">Tayyaba Zahra</h6>
          <p className="user-role">System Administrator</p>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item active"><i className="bi bi-grid-1x2-fill me-2"></i> Overview</Link>
          <Link to="/booking" className="nav-item"><i className="bi bi-file-earmark-text me-2"></i> Fleet Orders</Link>
          <Link to="/services" className="nav-item"><i className="bi bi-sliders me-2"></i> Settings</Link>
          <div className="nav-spacer"></div>
          <button onClick={() => { localStorage.clear(); window.location.href="/login" }} className="nav-item logout">
            <i className="bi bi-box-arrow-right me-2"></i> Sign Out
          </button>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="main-viewport">
        <header className="top-nav">
          <div className={`search-bar ${searchFocused ? 'focused' : ''}`}>
            <i className="bi bi-search"></i>
            <input 
              type="text" 
              placeholder="Search data nodes..." 
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          <div className="header-actions">
            <div className="status-pill">
              <span className={`indicator ${dbStatus === 'Offline' ? 'bg-danger' : 'bg-success'}`}></span>
              Cloud: {dbStatus}
            </div>
            <div className="clock-pill">{time}</div>
          </div>
        </header>

        <section className="content-area">
          <div className="welcome-header">
            <div>
              <h1>Command <span className="text-warning">Center</span></h1>
              <p>Operational Intelligence Dashboard</p>
            </div>
            <button className="sync-btn" onClick={handleSyncData} disabled={loading}>
              {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-arrow-repeat me-2"></i>}
              Sync Database
            </button>
          </div>

          {/* --- STATS GRID --- */}
          <div className="stats-grid">
            {statsDisplay.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon" style={{ background: `${s.color}15`, color: s.color }}>
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <span className="trend-badge">{s.trend}</span>
                </div>
                <h3 className="stat-number">{s.value}</h3>
                <p className="stat-title">{s.label}</p>
                <div className="stat-progress"><div className="fill" style={{ width: '70%', background: s.color }}></div></div>
              </div>
            ))}
          </div>

          {/* --- WORKSPACE --- */}
          <div className="workspace-grid">
            <div className="main-panel">
              <div className="premium-card">
                <div className="card-header-custom dark">
                  <h5><i className="bi bi-person-badge me-2"></i> Identity Management</h5>
                </div>
                <div className="card-body-custom">
                  <ProfileForm />
                </div>
              </div>
            </div>
            <div className="side-panel">
              <div className="premium-card">
                <div className="card-header-custom gold">
                  <h5><i className="bi bi-list-check me-2"></i> Active Tasks</h5>
                </div>
                <div className="card-body-custom">
                  <TodoList />
                  <div className="alert-box mt-4">
                    <label>SYSTEM ALERT</label>
                    <p>Fleet #402: Logistics delay detected in sector 4.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        :root { --sidebar-bg: #0f172a; --bg-main: #f8fafc; --accent: #f4c430; --text-main: #1e293b; }
        
        .dashboard-root { display: flex; height: 100vh; background: var(--bg-main); font-family: 'Inter', sans-serif; overflow: hidden; }

        /* Sidebar Styling */
        .sidebar { width: 280px; background: var(--sidebar-bg); padding: 2rem 1.5rem; display: flex; flex-direction: column; color: white; }
        .sidebar-brand { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 2.5rem; padding-left: 0.5rem; }
        .brand-icon { background: var(--accent); color: black; font-weight: 800; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; font-size: 1.2rem; }
        .brand-text { font-weight: 700; font-size: 1.1rem; letter-spacing: 1px; }
        .brand-text span { color: var(--accent); }

        .user-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 20px; text-align: center; margin-bottom: 2rem; }
        .user-avatar { position: relative; width: 70px; height: 70px; margin: 0 auto 0.8rem; }
        .user-avatar img { width: 100%; height: 100%; border-radius: 50%; border: 3px solid var(--accent); object-fit: cover; }
        .status-dot { position: absolute; bottom: 5px; right: 5px; width: 12px; height: 12px; background: #10b981; border-radius: 50%; border: 2px solid var(--sidebar-bg); }
        .user-name { font-size: 0.95rem; margin-bottom: 2px; font-weight: 600; }
        .user-role { font-size: 0.75rem; color: #94a3b8; margin: 0; }

        .sidebar-nav { display: flex; flex-direction: column; gap: 0.4rem; flex: 1; }
        .nav-item { padding: 0.8rem 1rem; color: #94a3b8; text-decoration: none; border-radius: 12px; font-size: 0.9rem; font-weight: 500; transition: 0.3s; display: flex; align-items: center; }
        .nav-item:hover { background: rgba(255,255,255,0.05); color: white; }
        .nav-item.active { background: var(--accent); color: black; font-weight: 600; }
        .nav-spacer { flex: 1; }
        .logout { color: #f87171 !important; border: none; background: none; text-align: left; }

        /* Main Content */
        .main-viewport { flex: 1; display: flex; flex-direction: column; overflow-y: auto; }
        .top-nav { height: 70px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 2.5rem; position: sticky; top: 0; z-index: 10; }
        .search-bar { background: #f1f5f9; padding: 0.6rem 1.2rem; border-radius: 12px; display: flex; align-items: center; gap: 0.8rem; width: 350px; border: 1px solid transparent; transition: 0.3s; }
        .search-bar.focused { background: white; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(244,196,48,0.1); }
        .search-bar input { border: none; background: transparent; outline: none; font-size: 0.85rem; width: 100%; }
        
        .header-actions { display: flex; gap: 1rem; }
        .status-pill { background: #f1f5f9; padding: 0.5rem 1rem; border-radius: 100px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; }
        .indicator { width: 8px; height: 8px; border-radius: 50%; }
        .clock-pill { background: var(--sidebar-bg); color: var(--accent); padding: 0.5rem 1.2rem; border-radius: 10px; font-weight: 800; font-size: 0.85rem; }

        /* Body Area */
        .content-area { padding: 2.5rem; }
        .welcome-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2.5rem; }
        .welcome-header h1 { font-weight: 800; font-size: 1.8rem; margin-bottom: 0.2rem; }
        .welcome-header p { color: #64748b; font-size: 0.9rem; }
        .sync-btn { background: var(--sidebar-bg); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 12px; font-weight: 600; font-size: 0.85rem; transition: 0.3s; }
        .sync-btn:hover { background: var(--accent); color: black; transform: translateY(-2px); }

        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2.5rem; }
        .stat-card { background: white; padding: 1.5rem; border-radius: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01); border: 1px solid #f1f5f9; transition: 0.3s; }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); }
        .stat-header { display: flex; justify-content: space-between; margin-bottom: 1.2rem; }
        .stat-icon { width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.2rem; }
        .trend-badge { background: #f1f5f9; color: #475569; font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 6px; height: fit-content; }
        .stat-number { font-size: 1.8rem; font-weight: 800; color: #0f172a; margin-bottom: 0.2rem; }
        .stat-title { color: #64748b; font-size: 0.85rem; font-weight: 500; margin-bottom: 1rem; }
        .stat-progress { height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; }
        .fill { height: 100%; border-radius: 10px; }

        .workspace-grid { display: grid; grid-template-columns: 1.8fr 1fr; gap: 1.5rem; }
        .premium-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid #f1f5f9; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }
        .card-header-custom { padding: 1.2rem 1.5rem; }
        .card-header-custom.dark { background: var(--sidebar-bg); color: white; }
        .card-header-custom.gold { background: var(--accent); color: black; }
        .card-header-custom h5 { margin: 0; font-size: 0.95rem; font-weight: 700; }
        .card-body-custom { padding: 1.5rem; }

        .alert-box { background: #fffbeb; border: 1px solid #fef3c7; padding: 1rem; border-radius: 15px; }
        .alert-box label { display: block; font-size: 0.65rem; font-weight: 800; color: #d97706; margin-bottom: 4px; letter-spacing: 0.5px; }
        .alert-box p { font-size: 0.8rem; color: #92400e; margin: 0; line-height: 1.4; }
      `}</style>
    </div>
  );
};

export default Dashboard;