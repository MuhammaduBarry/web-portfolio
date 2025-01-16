function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Show the copied bubble
      const copiedBubble = document.getElementById('copied-bubble');
      copiedBubble.classList.remove('hidden');

      // Hide the bubble after a short delay
      setTimeout(() => {
        copiedBubble.classList.add('hidden');
      }, 1500); // Hide after 1.5 seconds
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}