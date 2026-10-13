/**
 * Deepraj R — Personal Website Script
 * Minimal vanilla JavaScript (no frameworks, zero animations)
 */

document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyStatus = document.getElementById('copy-status');
  const emailText = 'd@deeprajr.com';

  if (copyBtn && copyStatus) {
    let resetTimer = null;

    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailText);
        } else {
          // Fallback for environments where Clipboard API is not available
          const tempInput = document.createElement('input');
          tempInput.value = emailText;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        copyStatus.textContent = 'Copied to clipboard!';
        copyBtn.textContent = 'Copied';

        if (resetTimer) {
          clearTimeout(resetTimer);
        }

        resetTimer = setTimeout(() => {
          copyStatus.textContent = '';
          copyBtn.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        copyStatus.textContent = 'Press and hold link to copy';
      }
    });
  }
});
