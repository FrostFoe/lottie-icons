import { useState, useEffect } from "react";
import {
  searchIcons,
  ANIMATION_TYPES,
  ICON_METADATA,
} from "./utils";

interface SearchFilterProps {
  onIconsChange: (icons: string[]) => void;
  onIconSelect: (icon: string) => void;
  favorites: Set<string>;
  onFavoritesChange: (favorites: Set<string>) => void;
}

export function SearchFilter({
  onIconsChange,
  onIconSelect,
  favorites,
  onFavoritesChange,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [animationType, setAnimationType] = useState<string>("");
  const [filteredIcons, setFilteredIcons] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    let results = searchIcons(searchQuery, animationType, favorites);

    if (showFavoritesOnly) {
      results = results.filter((icon) => favorites.has(icon));
    }

    setFilteredIcons(results);
    onIconsChange(results);
  }, [searchQuery, animationType, showFavoritesOnly, favorites, onIconsChange]);

  const toggleFavorite = (icon: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(icon)) {
      newFavorites.delete(icon);
    } else {
      newFavorites.add(icon);
    }
    onFavoritesChange(newFavorites);
    localStorage.setItem(
      "lottie-icons-favorites",
      JSON.stringify(Array.from(newFavorites))
    );
  };

  return (
    <div className="search-filter-panel">
      <div className="search-container">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search icons by name or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label>Animation Type:</label>
          <select
            value={animationType}
            onChange={(e) => setAnimationType(e.target.value)}
            className="filter-select"
          >
            <option value="">All Types</option>
            {ANIMATION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button
          className={`favorites-toggle ${showFavoritesOnly ? "active" : ""}`}
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          title="Show only favorite icons"
        >
          ❤️ Favorites {favorites.size > 0 && `(${favorites.size})`}
        </button>
      </div>

      <div className="search-results">
        <div className="results-header">
          <span className="result-count">
            {filteredIcons.length} icon{filteredIcons.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="icons-grid">
          {filteredIcons.map((iconName) => {
            const metadata = ICON_METADATA[iconName];
            const isFavorite = favorites.has(iconName);
            return (
              <div
                key={iconName}
                className={`icon-card ${isFavorite ? "favorite" : ""}`}
                onClick={() => onIconSelect(iconName)}
              >
                <div className="icon-preview">
                  <span title={metadata.description}>{iconName}</span>
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(iconName);
                  }}
                  title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
                <div className="icon-info">
                  <div className="icon-name">{iconName}</div>
                  <div className="icon-type">{metadata.animationType}</div>
                  <div className="icon-size">{metadata.bundleSize} kB</div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredIcons.length === 0 && (
          <div className="no-results">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <p>No icons found</p>
            <small>Try adjusting your search or filters</small>
          </div>
        )}
      </div>
    </div>
  );
}
