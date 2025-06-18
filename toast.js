export function showToast(message, duration = 3000) {
      const container = document.getElementById('toast-container');

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;

      container.appendChild(toast);

      // Auto-remove after duration
      setTimeout(() => {
        toast.style.animation = 'fadeOut 0.4s ease forwards';
        toast.addEventListener('animationend', () => {
          toast.remove();
        });
      }, duration);
    }