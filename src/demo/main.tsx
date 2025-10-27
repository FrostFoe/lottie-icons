import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Add,
  Announcement,
  Coupon,
  Customer,
  FilterItem,
} from "../../src/icons";
import "./styles.css";

function Demo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [size, setSize] = useState(24);
  const [absoluteStrokeWidth, setAbsoluteStrokeWidth] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  const themeColors = {
    light: {
      "#000000": "#4A4A4A", // Black to dark gray
    },
    dark: {
      "#000000": "#FFFFFF", // Black to white
    },
  };

  const colors = isDark ? themeColors.dark : themeColors.light;

  return (
    <div className={`lucide-clone ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 6v6l4 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Lottie Icons</span>
          </div>
          <nav className="nav">
            <a href="#icons">Icons</a>
            <a href="#guide">Guide</a>
            <a href="#packages">Packages</a>
            <a href="#showcase">Showcase</a>
            <a href="#license">License</a>
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </button>
            <a
              href="https://github.com"
              className="github-link"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://discord.com"
              className="discord-link"
              aria-label="Discord"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0 a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="version-badge">v1.0.0</div>
          <h1 className="hero-title">
            <span className="gradient-text">Animated &</span>
            <br />
            interactive icons
          </h1>
          <p className="hero-subtitle">Powered by Lottie animations.</p>
          <div className="hero-buttons">
            <button className="btn-primary">View all icons</button>
            <button className="btn-secondary">Get Started</button>
            <button className="btn-secondary">GitHub</button>
          </div>
        </div>

        {/* Icon Grid Preview */}
        <div className="hero-icons">
          <div className="icon-row">
            {[
              Add,
              Announcement,
              Customer,
              Coupon,
              FilterItem,
              Add,
              Announcement,
              Customer,
            ].map((Icon, i) => (
              <div key={i} className="hero-icon">
                <Icon size={20} autoplay loop colors={colors} />
              </div>
            ))}
          </div>
          <div className="icon-row">
            {[
              Coupon,
              FilterItem,
              Add,
              Announcement,
              Customer,
              Coupon,
              FilterItem,
              Add,
            ].map((Icon, i) => (
              <div key={i} className="hero-icon">
                <Icon size={20} autoplay loop colors={colors} />
              </div>
            ))}
          </div>
          <div className="icon-row">
            {[
              FilterItem,
              Add,
              Announcement,
              Customer,
              Coupon,
              FilterItem,
              Add,
              Announcement,
            ].map((Icon, i) => (
              <div key={i} className="hero-icon">
                <Icon size={20} autoplay loop colors={colors} />
              </div>
            ))}
          </div>
          <div className="icon-row">
            {[
              Add,
              Announcement,
              Customer,
              Coupon,
              FilterItem,
              Add,
              Announcement,
              Customer,
            ].map((Icon, i) => (
              <div key={i} className="hero-icon">
                <Icon size={20} autoplay loop colors={colors} />
              </div>
            ))}
          </div>

          {/* Search Bar Overlay */}
          <div className="search-overlay">
            <div className="search-bar">
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search 6 icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-section">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3>Animated & Lightweight</h3>
            <p>
              Smooth Lottie animations with lazy-loaded runtime. Only 0.16-0.32
              kB per icon (gzipped).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Lucide-style API</h3>
            <p>
              Familiar and intuitive API inspired by Lucide React, making it
              easy to use animated icons.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
              </svg>
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Control size, speed, loop, autoplay, hover effects, and animation
              callbacks.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </div>
            <h3>SSR-Safe & Framework Ready</h3>
            <p>
              Works seamlessly with Next.js, Remix, and all React frameworks.
              Zero SSR configuration needed.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="12" y2="8" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
              </svg>
            </div>
            <h3>Optimally Tree-Shakeable</h3>
            <p>
              Per-icon ESM exports with sideEffects: false. Only bundle what you
              use - 87% smaller bundles.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3>Interactive Features</h3>
            <p>
              Hover-to-play, event callbacks, and fine-grained animation control
              for rich user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Support */}
      <section className="frameworks-section">
        <p className="frameworks-label">Production-Ready Features:</p>
        <div className="frameworks">
          <div className="framework-logo" title="SSR-Safe">
            🔒 SSR
          </div>
          <div className="framework-logo" title="Tree-Shakeable">
            🌳 ESM
          </div>
          <div className="framework-logo" title="TypeScript">
            📘 TS
          </div>
          <div className="framework-logo" title="Lazy-Loaded">
            ⚡ Lazy
          </div>
        </div>
        <button className="btn-more">
          Next.js • Remix • Vite • All React frameworks
        </button>
      </section>

      {/* Customization Panel */}
      <section className="customization-section">
        <div className="customization-panel">
          <div className="panel-header">
            <h2>Quick Start</h2>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m8 14 4 4 4-4" />
              <path d="M12 18V6" />
            </svg>
          </div>
          <p className="panel-description">
            Install and start using animated icons in seconds. Choose between
            default or per-icon imports for optimal bundle size.
          </p>

          <div className="controls">
            <div className="control-group">
              <label>
                <span style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>
                  npm install lottie-icons
                </span>
              </label>
            </div>

            <div className="control-group">
              <label>
                <span style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>
                  import &#123; Add &#125; from 'lottie-icons'
                </span>
              </label>
              <span
                className="value"
                style={{ fontSize: "0.75rem", color: "#888" }}
              >
                ~0.32 kB gzipped
              </span>
            </div>

            <div className="control-group">
              <label>
                <span style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>
                  import Add from 'lottie-icons/icons/Add'
                </span>
              </label>
              <span
                className="value"
                style={{ fontSize: "0.75rem", color: "#10b981" }}
              >
                ~0.14 kB gzipped (87% smaller!)
              </span>
            </div>

            <div className="control-group">
              <label>
                <span style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>
                  &lt;Add size=&#123;48&#125; loop autoplay /&gt;
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Icon Preview Grid */}
        <div className="preview-grid">
          {Array.from({ length: 48 }, (_, i) => {
            const icons = [
              Add,
              Announcement,
              Coupon,
              Customer,
              FilterItem,
            ];
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="preview-icon">
                <Icon size={size} autoplay loop colors={colors} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Customization Panel */}
      <section className="customization-section">
        <div className="customization-panel">
          <div className="panel-header">
            <h2>Style as you please</h2>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
            </svg>
          </div>
          <p className="panel-description">
            Lottie Icons offers extensive customization with SSR-safe lazy
            loading, per-icon imports, and full animation control.
          </p>

          <div className="controls">
            <div className="control-group">
              <label>
                <span>Color</span>
                <div className="color-input">
                  <div className="color-swatch"></div>
                  <span>currentColor</span>
                </div>
              </label>
            </div>

            <div className="control-group">
              <label>
                <span>Animation Speed</span>
                <span className="value">{strokeWidth}x</span>
              </label>
              <input
                type="range"
                min="1"
                max="4"
                step="0.5"
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
              />
            </div>

            <div className="control-group">
              <label>
                <span>Size</span>
                <span className="value">{size}px</span>
              </label>
              <input
                type="range"
                min="16"
                max="48"
                step="4"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
            </div>

            <div className="control-group checkbox">
              <label>
                <span>Loop Animation</span>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={absoluteStrokeWidth}
                    onChange={(e) => setAbsoluteStrokeWidth(e.target.checked)}
                  />
                  <span className="slider"></span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Icon Preview Grid */}
        <div className="preview-grid">
          {Array.from({ length: 48 }, (_, i) => {
            const icons = [
              Add,
              Announcement,
              Coupon,
              Customer,
              FilterItem,
            ];
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="preview-icon">
                <Icon size={size} autoplay loop colors={colors} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Built with inspiration</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar avatar-red">
              <svg width="48" height="48" viewBox="0 0 24 24">
                <text
                  x="12"
                  y="16"
                  fontSize="12"
                  textAnchor="middle"
                  fill="white"
                >
                  LI
                </text>
              </svg>
            </div>
            <h3>Lottie Web</h3>
            <p>Animation library by Airbnb - The engine powering our icons</p>
            <div className="team-links">
              <a
                href="https://github.com/airbnb/lottie-web"
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-avatar avatar-green">
              <svg width="48" height="48" viewBox="0 0 24 24">
                <text
                  x="12"
                  y="16"
                  fontSize="12"
                  textAnchor="middle"
                  fill="white"
                >
                  LC
                </text>
              </svg>
            </div>
            <h3>Lucide Icons</h3>
            <p>Beautiful icon library - Inspired our API design</p>
            <div className="team-links">
              <a href="https://lucide.dev" aria-label="Website">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://github.com/lucide-icons/lucide"
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-avatar avatar-blue">
              <svg width="48" height="48" viewBox="0 0 24 24">
                <text
                  x="12"
                  y="16"
                  fontSize="12"
                  textAnchor="middle"
                  fill="white"
                >
                  LF
                </text>
              </svg>
            </div>
            <h3>LottieFiles</h3>
            <p>
              Animation platform - Source for thousands of Lottie animations
            </p>
            <div className="team-links">
              <a href="https://lottiefiles.com" aria-label="Website">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="sponsor-cta">
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>❤️</div>
          <p>Support open source projects</p>
          <button className="btn-sponsor">Star on GitHub</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>Released under the MIT License.</p>
            <p>Copyright © 2025 Lottie Icons</p>
          </div>
          <div className="footer-links">
            <a href="#license">License</a>
            <a href="#contribute">Contribute</a>
            <a href="#changelog">Changelog</a>
            <a href="#github">GitHub</a>
            <a href="#issues">Issues</a>
          </div>
        </div>
        <div className="footer-sponsor">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>Built with React & Lottie</span>
        </div>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Demo />);
