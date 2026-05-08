"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Bell, MoonStar, Sun, Trophy, Waves } from "lucide-react";

const stepsData = [
  { day: "Mon", steps: 7100 }, { day: "Tue", steps: 7600 }, { day: "Wed", steps: 8400 }, { day: "Thu", steps: 9050 }, { day: "Fri", steps: 9800 }, { day: "Sat", steps: 8550 }, { day: "Sun", steps: 10200 },
];

const weightData = [{ week: "W1", kg: 72.0 }, { week: "W2", kg: 70.9 }];
const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export default function Page() {
  const [dark, setDark] = useState(false);
  const [water, setWater] = useState(2.3);
  const [sleep, setSleep] = useState(7.2);
  const [protein, setProtein] = useState(68);
  const [energy, setEnergy] = useState(7);

  const day = 6;
  const progress = useMemo(() => Math.round((day / 14) * 100), [day]);

  return (
    <main className={dark ? "min-h-screen bg-zinc-900 text-zinc-100" : "min-h-screen"}>
      <div className="mx-auto max-w-7xl p-4 md:p-8 space-y-6">
        <section className="card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-lavender/50 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sage/60 blur-2xl" />
          <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-zinc-800">My 2-Week Reset Journey ✨</h1>
              <p className="mt-2 text-zinc-600">Becoming healthier, happier, and stronger — one cozy day at a time.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="card p-2" onClick={() => setDark((v) => !v)}>{dark ? <Sun size={18} /> : <MoonStar size={18} />}</button>
              <button className="card p-2"><Bell size={18} /></button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 relative z-10">
            {[
              ["Current Weight", "70.9 kg"], ["Goal Weight", "67.0 kg"], ["Water", `${water.toFixed(1)}L / 3L`], ["Steps", "9,800"], ["Workout Streak", "5 Days"]
            ].map(([k, v]) => <div key={k} className="card p-4"><p className="text-xs opacity-70">{k}</p><p className="font-semibold mt-1">{v}</p></div>)}
          </div>
          <div className="mt-5">
            <p className="text-sm">Day {day} of 14 · {progress}% complete</p>
            <div className="h-3 w-full bg-white/50 rounded-full mt-2"><motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-3 rounded-full bg-gradient-to-r from-sage to-lavender" /></div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="card p-5 space-y-3"><h2 className="font-semibold">Daily Check-In</h2><label>Water (2.5–3L): {water.toFixed(1)}L</label><input type="range" min={0} max={4} step={0.1} value={water} onChange={e => setWater(Number(e.target.value))} className="w-full" /><label>Sleep (7+ hrs): {sleep.toFixed(1)}h</label><input type="range" min={0} max={10} step={0.1} value={sleep} onChange={e => setSleep(Number(e.target.value))} className="w-full" /><label>Protein (80g): {protein}g</label><input type="range" min={0} max={140} step={1} value={protein} onChange={e => setProtein(Number(e.target.value))} className="w-full" /><label>Energy: {energy}/10</label><input type="range" min={1} max={10} value={energy} onChange={e => setEnergy(Number(e.target.value))} className="w-full" /><textarea className="w-full rounded-2xl p-3 bg-white/60" rows={3} placeholder="How I feel today..." /></div>

          <div className="card p-5"><h2 className="font-semibold mb-3">Weekly Steps Trend</h2><div className="h-60"><ResponsiveContainer width="100%" height="100%"><AreaChart data={stepsData}><defs><linearGradient id="steps" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#a5d6b0" stopOpacity={0.8}/><stop offset="95%" stopColor="#a5d6b0" stopOpacity={0.1}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="#e7e3de"/><XAxis dataKey="day"/><YAxis/><Tooltip/><Area type="monotone" dataKey="steps" stroke="#74b485" fill="url(#steps)"/></AreaChart></ResponsiveContainer></div><p className="text-sm mt-2">Week 1 goal: 7,000/day · Week 2 goal: 8,500–10,000/day</p></div>

          <div className="card p-5"><h2 className="font-semibold mb-3">Weight & Body Progress</h2><div className="h-52"><ResponsiveContainer width="100%" height="100%"><AreaChart data={weightData}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="week"/><YAxis domain={[67, 73]}/><Tooltip/><Area type="monotone" dataKey="kg" stroke="#f19cb5" fill="#fbe0e9"/></AreaChart></ResponsiveContainer></div><div className="mt-3 grid grid-cols-2 gap-2 text-sm"><div className="card p-3">You’re down 1kg! 🎉</div><div className="card p-3">Consistency streak: 5 days! 🔥</div></div></div>
        </section>

        <section className="card p-5"><h2 className="font-semibold mb-4">Meal Tracker & Nutrition</h2><div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">{meals.map(m=><div key={m} className="rounded-2xl bg-white/60 p-4"><p className="font-medium">{m}</p><textarea rows={3} className="mt-2 w-full rounded-xl p-2 bg-white" placeholder="Food notes + emoji"/><div className="mt-2 text-xs">Calories • Protein • Balance</div></div>)}</div><p className="mt-4 text-sm">Structure: 1 palm protein · 1 fist carbs · unlimited veggies · healthy fats in moderation.</p></section>

        <section className="grid lg:grid-cols-2 gap-4">
          <div className="card p-5"><h2 className="font-semibold mb-3">Workout Planner (A/B/C)</h2><ul className="space-y-2 text-sm"><li>Day A: Leg Press, Lat Pulldown, Shoulder Press, Glute Bridges, Incline Walk</li><li>Day B: RDL, Seated Row, Goblet Squat, Cable Crunches, Incline Walk</li><li>Day C: Hip Thrust, Chest Press, Walking Lunges, Assisted Plank, Stairmaster</li></ul><div className="mt-3 flex gap-2 flex-wrap">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d=><button key={d} className="rounded-full px-3 py-1 bg-sage/50">{d}</button>)}</div></div>
          <div className="card p-5"><h2 className="font-semibold mb-3">Motivation & Wellness</h2><blockquote className="italic text-sm">“Progress over perfection.”</blockquote><div className="grid grid-cols-2 gap-3 mt-3 text-sm"><div className="rounded-2xl p-3 bg-yellow-100">One planned treat daily is okay.</div><div className="rounded-2xl p-3 bg-pink-100">Avoid sugary drinks/liquid calories.</div><div className="rounded-2xl p-3 bg-green-100">Never miss 2 days in a row.</div><div className="rounded-2xl p-3 bg-purple-100">One bad meal does NOT ruin progress.</div></div><div className="mt-3 flex items-center gap-2"><Waves size={16}/>Mindfulness timer: 10:00</div></div>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="card p-5"><h3 className="font-semibold">Weekly Review</h3><p className="text-sm mt-2">Habit consistency: 86%</p><p className="text-sm">Best workout day: Thursday</p><p className="text-sm">Average sleep: 7.4h</p><p className="text-sm">Water consistency: 81%</p></div>
          <div className="card p-5"><h3 className="font-semibold">Achievement Badges</h3><div className="mt-3 flex gap-2 flex-wrap"><span className="rounded-full px-3 py-1 bg-lavender/70"><Trophy className="inline mr-1" size={14}/>5-Day Streak</span><span className="rounded-full px-3 py-1 bg-sage/70">Hydration Hero</span></div></div>
          <div className="card p-5"><h3 className="font-semibold">AI Wellness Assistant</h3><p className="text-sm mt-2">“You’re doing amazing! Want a high-protein dinner idea?”</p></div>
        </section>
      </div>
    </main>
  );
}
