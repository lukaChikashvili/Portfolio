import { useEffect, useState } from "react";

let recognition = null;

if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
  const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'en-US';
}

const useSpeechRecognition = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
      if (event.results[0][0].transcript.includes('scroll')) {
        const pixels = parseInt(event.results[0][0].transcript.replace(/[^0-9]/g, ''), 800) || 800; 
        window.scrollBy({ top: pixels, behavior: 'smooth' });
      }
      
      recognition.stop();
      setIsListening(false);
    };
  }, []);

  const startListening = () => {
    if (!recognition) return;
    setText('');
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    if (!recognition) return;
    setIsListening(false);
    recognition.stop();
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;