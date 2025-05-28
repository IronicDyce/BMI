"use client";

import React, { useState } from 'react';

const cupRanks = {
  'AA': 1,
  'A': 2,
  'B': 3,
  'C': 4,
  'D': 5,
  'DD': 6,
  'E': 7,
  'F': 8,
  'G': 9,
  'H+': 10
};

const jiggleLabels = [
  'Still',
  'Barely a Bounce',
  'Gentle Wiggle',
  'Noticeable',
  'Moderate',
  'Bouncy',
  'Boing!',
  'High Alert',
  'Extreme Jiggler',
  'Seismic!'
];

export default function Page() {
  const [cup, setCup] = useState('C');
  const [band, setBand] = useState(34);
  const [jiggle, setJiggle] = useState(5);
  const [torso, setTorso] = useState(2);
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const cupValue = cupRanks[cup] || 1;
    const bmi = ((cupValue * band * jiggle) / (torso ** 2)).toFixed(2);

    let category = '';
    let description = '';
    if (bmi < 10) {
      category = '✨ Modestly Magnificent';
      description = 'A subtle elegance. Classy & cozy.';
    } else if (bmi < 20) {
      category = '🍈 Balanced & Bouncy';
      description = 'The golden ratio of jiggle and comfort.';
    } else if (bmi < 30) {
      category = '🥥 Overflowing Assets';
      description = 'May defy physics. Caution in sports bras.';
    } else {
      category = '🍉 Ultra-Thicc Tier';
      description = 'Causes traffic accidents and back pain.';
    }

    setResult({ bmi, category, description });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold text-center mb-6">🎀 Boob Mass Index Calculator 🎀</h1>
        <img src="/images/bmi.png" alt="Boob Mass Index Visual" class="mx-auto mb-6 max-w-xs rounded-lg shadow-md" />

        <div className="bg-white p-4 mb-6 rounded shadow">
          <div className="space-y-4">
            <div>
              <label>Cup Size:</label>
              <select value={cup} onChange={e => setCup(e.target.value)} className="w-full p-2 rounded border">
                {Object.keys(cupRanks).map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label>Band Size (e.g., 34):</label>
              <input type="number" value={band} onChange={e => setBand(Number(e.target.value))} className="w-full p-2 rounded border" />
            </div>

            <div>
              <label>Jiggle Factor: {jiggle} ({jiggleLabels[jiggle - 1]})</label>
              <input type="range" min="1" max="10" value={jiggle} onChange={e => setJiggle(Number(e.target.value))} className="w-full" />
            </div>

            <div>
              <label>Torso Width (hand spans across chest):</label>
              <input type="number" min="1" max="5" value={torso} onChange={e => setTorso(Number(e.target.value))} className="w-full p-2 rounded border" />
            </div>

            <button className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600" onClick={calculateBMI}>💖 Calculate B.M.I.</button>
          </div>
        </div>

        {result && (
          <div className="mb-6 p-4 bg-white rounded shadow text-center">
            <h2 className="text-2xl font-semibold">Your B.M.I. is: {result.bmi}</h2>
            <p className="text-xl mt-2">{result.category}</p>
            <p className="text-sm mt-1">{result.description}</p>
          </div>
        )}

        <div className="bg-pink-100 p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">🎀 Boob Mass Index (BMI): A Totally Scientific Measurement 🎀</h2>
          <p>Are you tired of boring health charts? Say goodbye to scales and tape measures — the Boob Mass Index is here to lift your spirits and support your curves.</p>

          <h3 className="font-semibold">🧪 What Is Boob Mass Index?</h3>
          <p>BMI (Boob Mass Index) is the definitive measure of health, success, and gravitational defiance — calculated entirely based on your cup size, cleavage density, and overall vibe.</p>

          <h3 className="font-semibold">📏 The Official B.M.I. Formula:</h3>
          <p>
            <code>B.M.I. = (Cup Volume × Jiggle Factor) / (Torso Width<sup>2</sup>)</code><br/>
            <strong>Where:</strong><br/>
            Cup Volume = Letter Rank × Bra Band Size<br/>
            Jiggle Factor = Derived from bounce per step while walking<br/>
            Torso Width = Measured by "hand span coverage" across the chest
          </p>
          <p>All calculations peer-reviewed by certified simps and totally real scientists.</p>

          <h3 className="font-semibold">📊 The B.M.I. Scale:</h3>
          <ul className="list-disc ml-5">
            <li><strong>&lt; 10:</strong> ✨ Modestly Magnificent — A subtle elegance. Classy & cozy.</li>
            <li><strong>10–20:</strong> 🍈 Balanced & Bouncy — The golden ratio of jiggle and comfort.</li>
            <li><strong>20–30:</strong> 🥥 Overflowing Assets — May defy physics. Caution in sports bras.</li>
            <li><strong>30+:</strong> 🍉 Ultra-Thicc Tier — Causes traffic accidents and back pain.</li>
          </ul>

          <h3 className="font-semibold">🧠 Fun Boob Facts:</h3>
          <ul className="list-disc ml-5">
            <li>High BMI? You’re at risk of becoming the “main character” at the gym.</li>
            <li>Low BMI? That just means you’re aerodynamic.</li>
            <li>Medium BMI? Welcome to the club — you probably broke at least 3 buttons this year.</li>
          </ul>

          <h3 className="font-semibold">💡 Our Mission:</h3>
          <p>We believe everyone deserves to be uplifted. Whether you’re rocking mosquito bites or melons, Boob Mass Index is here to remind you: every chest deserves respect.</p>

          <div className="text-xs text-center text-gray-500 mt-8">
            <p>Disclaimer: This calculator is a parody and is not scientifically or medically accurate. It was created for humor and entertainment with a good-natured intention to uplift and amuse. Always do your own research (DYOR). Not financial advice.</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 space-y-6">
        <aside className="bg-white border rounded-lg p-4 h-fit shadow-md">
          <h3 className="text-lg font-bold mb-2">🎗 Support Breast Cancer Research</h3>
          <p className="mb-4">Want to make a real impact? Consider donating to the Breast Cancer Research Foundation and help fund lifesaving research.</p>
          <a
            href="https://give.bcrf.org/campaign/584695/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            💖 Donate Now
          </a>
        </aside>

        <aside className="bg-white border rounded-lg p-4 h-fit shadow-md">
          <h3 className="text-lg font-bold mb-2">💸 Buy $BMI Token</h3>
          <p className="mb-4">Join the jiggle-powered economy! Buy $BMI on Pump.fun and invest in bounce-backed assets.</p>
          <a
            href="https://pump.fun/coin/JCS7QiuzxNtTFD8fvMi6icqFimU1sS6n4jsH8dv8L5ks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            🛒 Buy $BMI Now
          </a>
        </aside>

        {result && (
          <aside className="bg-white border rounded-lg p-4 h-fit shadow-md text-center">
            <h3 className="text-lg font-bold mb-2">📷 B.M.I. Visual Vibe</h3>
            <img
              src={
                result.bmi < 10
                  ? '/images/bmi-modest.png'
                  : result.bmi < 20
                  ? '/images/bmi-balanced.png'
                  : result.bmi < 30
                  ? '/images/bmi-overflowing.png'
                  : '/images/bmi-ultra.png'
              }
              alt="BMI Visual"
              className="w-full rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
            <p className="text-sm mt-2 text-gray-500">Just a fun visual for your B.M.I. tier 💖</p>
          </aside>
        )}
      </div>
    </div>
  );
}
