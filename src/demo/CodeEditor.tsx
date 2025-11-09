import { useState } from "react";
import { generateCodeSnippet, copyToClipboard } from "./utils";
import { useToast } from "./toast";

interface CodeEditorProps {
  selectedIcon: string;
  perIconImport: boolean;
  onToggleImportType: () => void;
}

export function CodeEditor({
  selectedIcon,
  perIconImport,
  onToggleImportType,
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const codeSnippet = generateCodeSnippet(selectedIcon, perIconImport);

  const handleCopy = async () => {
    const success = await copyToClipboard(codeSnippet);
    if (success) {
      setCopied(true);
      addToast("Copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } else {
      addToast("Failed to copy", "error");
    }
  };

  return (
    <div className="code-editor-panel">
      <div className="editor-header">
        <h3>Code Editor</h3>
        <div className="editor-controls">
          <button
            className={`import-toggle ${perIconImport ? "active" : ""}`}
            onClick={onToggleImportType}
            title="Toggle between default and per-icon imports"
          >
            {perIconImport ? "Per-Icon Import" : "Default Import"}
          </button>
          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {copied ? "✓ Copied" : "📋 Copy"}
          </button>
        </div>
      </div>

      <div className="code-display">
        <pre>
          <code>{codeSnippet}</code>
        </pre>
      </div>

      <div className="bundle-info">
        <div className="bundle-size">
          <span className="label">Bundle Size (gzipped):</span>
          <span className={`size ${perIconImport ? "optimized" : ""}`}>
            {perIconImport ? "~0.14 kB" : "~0.32 kB"}
          </span>
        </div>
        {perIconImport && (
          <div className="savings">
            <span className="label">Savings:</span>
            <span className="value">87% smaller! 🚀</span>
          </div>
        )}
      </div>
    </div>
  );
}
