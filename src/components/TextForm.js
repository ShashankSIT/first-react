import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [languages, setLanguages] = useState([
    {
      language: "en",
      name: "English",
    },
    {
      language: "af",
      name: "Afrikaans",
    },
    {
      language: "sq",
      name: "Albanian",
    },
    {
      language: "am",
      name: "Amharic",
    },
    {
      language: "ar",
      name: "Arabic",
    },
    {
      language: "hy",
      name: "Armenian",
    },
    {
      language: "as",
      name: "Assamese",
    },
    {
      language: "ay",
      name: "Aymara",
    },
    {
      language: "az",
      name: "Azerbaijani",
    },
    {
      language: "bm",
      name: "Bambara",
    },
    {
      language: "eu",
      name: "Basque",
    },
    {
      language: "be",
      name: "Belarusian",
    },
    {
      language: "bn",
      name: "Bengali",
    },
    {
      language: "bho",
      name: "Bhojpuri",
    },
    {
      language: "bs",
      name: "Bosnian",
    },
    {
      language: "bg",
      name: "Bulgarian",
    },
    {
      language: "ca",
      name: "Catalan",
    },
    {
      language: "ceb",
      name: "Cebuano",
    },
    {
      language: "zh",
      name: "Chinese (Simplified)",
    },
    {
      language: "zh-CN",
      name: "Chinese (Simplified)",
    },
    {
      language: "zh-TW",
      name: "Chinese (Traditional)",
    },
    {
      language: "co",
      name: "Corsican",
    },
    {
      language: "hr",
      name: "Croatian",
    },
    {
      language: "cs",
      name: "Czech",
    },
    {
      language: "da",
      name: "Danish",
    },
    {
      language: "dv",
      name: "Dhivehi",
    },
    {
      language: "doi",
      name: "Dogri",
    },
    {
      language: "nl",
      name: "Dutch",
    },
    {
      language: "eo",
      name: "Esperanto",
    },
    {
      language: "et",
      name: "Estonian",
    },
    {
      language: "ee",
      name: "Ewe",
    },
    {
      language: "fil",
      name: "Filipino (Tagalog)",
    },
    {
      language: "fi",
      name: "Finnish",
    },
    {
      language: "fr",
      name: "French",
    },
    {
      language: "fy",
      name: "Frisian",
    },
    {
      language: "gl",
      name: "Galician",
    },
    {
      language: "ka",
      name: "Georgian",
    },
    {
      language: "de",
      name: "German",
    },
    {
      language: "el",
      name: "Greek",
    },
    {
      language: "gn",
      name: "Guarani",
    },
    {
      language: "gu",
      name: "Gujarati",
    },
    {
      language: "ht",
      name: "Haitian Creole",
    },
    {
      language: "ha",
      name: "Hausa",
    },
    {
      language: "haw",
      name: "Hawaiian",
    },
    {
      language: "he",
      name: "Hebrew",
    },
    {
      language: "iw",
      name: "Hebrew",
    },
    {
      language: "hi",
      name: "Hindi",
    },
    {
      language: "hmn",
      name: "Hmong",
    },
    {
      language: "hu",
      name: "Hungarian",
    },
    {
      language: "is",
      name: "Icelandic",
    },
    {
      language: "ig",
      name: "Igbo",
    },
    {
      language: "ilo",
      name: "Ilocano",
    },
    {
      language: "id",
      name: "Indonesian",
    },
    {
      language: "ga",
      name: "Irish",
    },
    {
      language: "it",
      name: "Italian",
    },
    {
      language: "ja",
      name: "Japanese",
    },
    {
      language: "jv",
      name: "Javanese",
    },
    {
      language: "jw",
      name: "Javanese",
    },
    {
      language: "kn",
      name: "Kannada",
    },
    {
      language: "kk",
      name: "Kazakh",
    },
    {
      language: "km",
      name: "Khmer",
    },
    {
      language: "rw",
      name: "Kinyarwanda",
    },
    {
      language: "gom",
      name: "Konkani",
    },
    {
      language: "ko",
      name: "Korean",
    },
    {
      language: "kri",
      name: "Krio",
    },
    {
      language: "ku",
      name: "Kurdish",
    },
    {
      language: "ckb",
      name: "Kurdish (Sorani)",
    },
    {
      language: "ky",
      name: "Kyrgyz",
    },
    {
      language: "lo",
      name: "Lao",
    },
    {
      language: "la",
      name: "Latin",
    },
    {
      language: "lv",
      name: "Latvian",
    },
    {
      language: "ln",
      name: "Lingala",
    },
    {
      language: "lt",
      name: "Lithuanian",
    },
    {
      language: "lg",
      name: "Luganda",
    },
    {
      language: "lb",
      name: "Luxembourgish",
    },
    {
      language: "mk",
      name: "Macedonian",
    },
    {
      language: "mai",
      name: "Maithili",
    },
    {
      language: "mg",
      name: "Malagasy",
    },
    {
      language: "ms",
      name: "Malay",
    },
    {
      language: "ml",
      name: "Malayalam",
    },
    {
      language: "mt",
      name: "Maltese",
    },
    {
      language: "mi",
      name: "Maori",
    },
    {
      language: "mr",
      name: "Marathi",
    },
    {
      language: "mni-Mtei",
      name: "Meiteilon (Manipuri)",
    },
    {
      language: "lus",
      name: "Mizo",
    },
    {
      language: "mn",
      name: "Mongolian",
    },
    {
      language: "my",
      name: "Myanmar (Burmese)",
    },
    {
      language: "ne",
      name: "Nepali",
    },
    {
      language: "no",
      name: "Norwegian",
    },
    {
      language: "ny",
      name: "Nyanja (Chichewa)",
    },
    {
      language: "or",
      name: "Odia (Oriya)",
    },
    {
      language: "om",
      name: "Oromo",
    },
    {
      language: "ps",
      name: "Pashto",
    },
    {
      language: "fa",
      name: "Persian",
    },
    {
      language: "pl",
      name: "Polish",
    },
    {
      language: "pt",
      name: "Portuguese (Portugal, Brazil)",
    },
    {
      language: "pa",
      name: "Punjabi",
    },
    {
      language: "qu",
      name: "Quechua",
    },
    {
      language: "ro",
      name: "Romanian",
    },
    {
      language: "ru",
      name: "Russian",
    },
    {
      language: "sm",
      name: "Samoan",
    },
    {
      language: "sa",
      name: "Sanskrit",
    },
    {
      language: "gd",
      name: "Scots Gaelic",
    },
    {
      language: "nso",
      name: "Sepedi",
    },
    {
      language: "sr",
      name: "Serbian",
    },
    {
      language: "st",
      name: "Sesotho",
    },
    {
      language: "sn",
      name: "Shona",
    },
    {
      language: "sd",
      name: "Sindhi",
    },
    {
      language: "si",
      name: "Sinhala (Sinhalese)",
    },
    {
      language: "sk",
      name: "Slovak",
    },
    {
      language: "sl",
      name: "Slovenian",
    },
    {
      language: "so",
      name: "Somali",
    },
    {
      language: "es",
      name: "Spanish",
    },
    {
      language: "su",
      name: "Sundanese",
    },
    {
      language: "sw",
      name: "Swahili",
    },
    {
      language: "sv",
      name: "Swedish",
    },
    {
      language: "tl",
      name: "Tagalog (Filipino)",
    },
    {
      language: "tg",
      name: "Tajik",
    },
    {
      language: "ta",
      name: "Tamil",
    },
    {
      language: "tt",
      name: "Tatar",
    },
    {
      language: "te",
      name: "Telugu",
    },
    {
      language: "th",
      name: "Thai",
    },
    {
      language: "ti",
      name: "Tigrinya",
    },
    {
      language: "ts",
      name: "Tsonga",
    },
    {
      language: "tr",
      name: "Turkish",
    },
    {
      language: "tk",
      name: "Turkmen",
    },
    {
      language: "ak",
      name: "Twi (Akan)",
    },
    {
      language: "uk",
      name: "Ukrainian",
    },
    {
      language: "ur",
      name: "Urdu",
    },
    {
      language: "ug",
      name: "Uyghur",
    },
    {
      language: "uz",
      name: "Uzbek",
    },
    {
      language: "vi",
      name: "Vietnamese",
    },
    {
      language: "cy",
      name: "Welsh",
    },
    {
      language: "xh",
      name: "Xhosa",
    },
    {
      language: "yi",
      name: "Yiddish",
    },
    {
      language: "yo",
      name: "Yoruba",
    },
    {
      language: "zu",
      name: "Zulu",
    },
  ]);
  const [sourceLang, setSourceLang] = useState("en"); // Default source language (English)
  const [targetLang, setTargetLang] = useState("es"); // Default target language (Spanish)

  // Standalone title case function
  const toTitleCase = (str) => {
    props.showAlert("Converted To Titlecase", "info")
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleTitleClick = () => {
    setText(toTitleCase(text));
  };

  const handleListenClick = () => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  // Fetch available languages when component mounts
  useEffect(() => {
    const fetchLanguages = async () => {
      const options = {
        method: "GET",
        url: "https://deep-translate1.p.rapidapi.com/language/translate/v2/languages",
        headers: {
          "x-rapidapi-key":
            "6f792c3360msh8e5d74883c3b253p104aa1jsn72fa444fa9eexxx",
          "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setLanguages(response.data.languages);
        console.log(response.data.languages);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  // Translate text using the selected target language
  const handleTranslateClick = async () => {
    const options = {
      method: "POST",
      url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "x-rapidapi-key": "6f792c3360msh8e5d74883c3b253p104aa1jsn72fa444fa9ee",
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        q: text,
        // source: sourceLang,
        target: targetLang,
      },
    };

    try {
      const response = await axios.request(options);
      setText(response.data.data.translations.translatedText);
      setSourceLang(targetLang);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };
  // Translate text using the selected target language
  const handleListenAllClick = async () => {
    const options = {
      method: "POST",
      url: "https://text-to-speach-api.p.rapidapi.com/text-to-speech",
      responseType: "arraybuffer",
      headers: {
        "x-rapidapi-key": "6f792c3360msh8e5d74883c3b253p104aa1jsn72fa444fa9ee",
        "x-rapidapi-host": "text-to-speach-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        text: text,
        lang: sourceLang,
        speed: "fast",
      },
    };
    try {
      const response = await axios(options);
      const audioBlob = new Blob([response.data], { type: "audio/mpeg" }); // Adjust MIME type if necessary
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

      audio.addEventListener("ended", () => {
        URL.revokeObjectURL(audioUrl);
      });
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={
              props.mode === "dark"
                ? { backgroundColor: "#1f2b31", color: "white" }
                : { backgroundColor: "white", color: "#1f2b31" }
            }
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <div className="mb-3"></div>
        <div className="row g-2">
          <div className="col-6 mt-3">
            <div className="row">
              <div className="col-6">
                <h5>Select Target Language:</h5>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  onChange={(e) => setTargetLang(e.target.value)}
                  value={targetLang}
                >
                  {languages.map((lang) => (
                    <option key={lang.language} value={lang.language}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
            <button
              className="btn btn-success w-100"
              type="button"
              onClick={handleTranslateClick}
            >
              Translate Text
            </button>
          </div>
          <div className="col-3 mt-3">
            <button
              className="btn btn-danger w-100"
              type="button"
              onClick={handleListenAllClick}
            >
              Listen All Texts
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary w-100"
              type="button"
              onClick={handleUpClick}
            >
              CONVERT TO UPPERCASE
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-warning w-100"
              type="button"
              onClick={handleLowClick}
            >
              convert to lowercase
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-info w-100"
              type="button"
              onClick={handleTitleClick}
            >
              Convert To Titlecase
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-secondary w-100"
              type="button"
              onClick={handleListenClick}
            >
              Listen Text
            </button>
          </div>

          <hr />
        </div>
      </div>
      <div className="container my-3">
        <h4>Text Summary</h4>
        <p>
          This paragraph has{" "}
          {text.trim().length === 0
            ? 0
            : text.trim().replace(/\s+/g, " ").split(" ").length}{" "}
          Words and {text.length} Characters.
        </p>
      </div>
    </>
  );
}
