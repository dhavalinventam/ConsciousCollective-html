document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const progressOverlay = document.getElementById('progress-overlay');
    const waveformBars = document.getElementById('waveform-bars');
    const totalDurationSeconds = 102; // Manually setting 1:42 (60 + 42) for initial display

    // Function to format time from seconds to MM:SS
    function formatTime(seconds) {
        if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    // Generate waveform bars
    function generateWaveform() {
        const barCount = 50; // Number of bars in the waveform
        const heights = [30, 60, 45, 70, 35, 55, 40, 65, 50, 75, 45, 60, 35, 70, 50, 65, 40, 55, 45, 60, 35, 70, 50, 65, 40, 55, 45, 60, 35, 70, 50, 65, 40, 55, 45, 60, 35, 70, 50, 65, 40, 55, 45, 60, 35, 70, 50, 65, 40, 55];
        
        waveformBars.innerHTML = '';
        for (let i = 0; i < barCount; i++) {
            const bar = document.createElement('div');
            bar.className = 'waveform-bar';
            const height = heights[i % heights.length];
            bar.style.height = height + '%';
            waveformBars.appendChild(bar);
        }
    }

    // Initialize waveform
    generateWaveform();

    // --- Initial Setup and Metadata ---
    
    // Set the initial duration (mimicking the screenshot)
    durationEl.textContent = formatTime(totalDurationSeconds);
    
    // Once the audio file is loaded, update the duration element
    audio.addEventListener('loadedmetadata', () => {
        // Use the actual duration if the audio file is loaded successfully
        if (audio.duration && isFinite(audio.duration)) {
            durationEl.textContent = formatTime(audio.duration);
        }
    });

    // Handle audio errors
    audio.addEventListener('error', () => {
        console.log('Audio file could not be loaded. Please check the file path.');
        // Keep the default duration display
    });

    // --- Play/Pause Toggle ---

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused || audio.ended) {
            audio.play().catch(error => {
                console.log('Error playing audio:', error);
            });
            if (playIcon) playIcon.style.display = 'none';
            if (pauseIcon) pauseIcon.style.display = 'block';
        } else {
            audio.pause();
            if (playIcon) playIcon.style.display = 'block';
            if (pauseIcon) pauseIcon.style.display = 'none';
        }
    });

    // --- Audio Time Update ---

    audio.addEventListener('timeupdate', () => {
        // Update current time display
        currentTimeEl.textContent = formatTime(audio.currentTime);

        // Update progress overlay width
        if (audio.duration && isFinite(audio.duration)) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressOverlay.style.width = `${Math.min(100, Math.max(0, progressPercent))}%`;
            
            // Update bar colors based on progress
            const bars = waveformBars.querySelectorAll('.waveform-bar');
            bars.forEach((bar, index) => {
                const barPercent = (index / bars.length) * 100;
                if (barPercent <= progressPercent) {
                    bar.style.backgroundColor = '#93d2cd'; // Light blue for played
                } else {
                    bar.style.backgroundColor = '#838383'; // Light grey for unplayed
                }
            });
        }
    });

    // --- Audio Ended ---

    audio.addEventListener('ended', () => {
        // Reset controls when audio finishes
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        currentTimeEl.textContent = formatTime(0); // Reset time to 0:00
        progressOverlay.style.width = '0%'; // Reset progress overlay
        
        // Reset all bars to grey
        const bars = waveformBars.querySelectorAll('.waveform-bar');
        bars.forEach(bar => {
            bar.style.backgroundColor = '#cccccc';
        });
    });
});