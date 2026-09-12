import React, { useState } from 'react';
import { Home, CheckSquare, TrendingUp, Wallet, User, Bell, Sparkles, ChevronRight, Copy, Play, Flame, ArrowUpRight, ArrowDownLeft, Gift, Share2, TrendingDown } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'predict' | 'wallet' | 'profile'>('home');
  const [balance, setBalance] = useState(12480);
  const [streakDays, setStreakDays] = useState(3);
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const [tasks] = useState([
    { id: 1, title: 'تماشای ویدیو یوتیوب', reward: 150, done: false },
    { id: 2, title: 'فالو کردن اینستاگرام', reward: 100, done: false },
    { id: 3, title: 'عضویت در کانال تلگرام', reward: 100, done: false },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[#080a0f] text-white pb-24 font-sans select-none" dir="rtl">
      <header className="px-5 pt-4 pb-3 flex items-center justify-between sticky top-0 z-30 bg-[#080a0f]/90 backdrop-blur-md border-b border-amber-500/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-yellow-200">
             <div className="w-full h-full rounded-full bg-[#121620] flex items-center justify-center font-black text-amber-400">M</div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold">Majid <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">L5</span></div>
            <div className="text-[10px] text-gray-400">750/1000 XP</div>
          </div>
        </div>
        <Bell size={18} className="text-amber-400" />
      </header>

      <main className="flex-1 px-4 pt-3 max-w-lg mx-auto w-full">
        {activeTab === 'home' && (
          <div className="space-y-4">
            <div className="luxury-card p-5 border border-amber-500/20 rounded-2xl bg-slate-900/50">
              <div className="text-xs text-amber-300">موجودی کل</div>
              <div className="text-3xl font-black mt-1">{balance.toLocaleString()} <span className="text-amber-400">MJX</span></div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button onClick={() => setActiveTab('wallet')} className="gold-btn-primary py-2 rounded-xl font-bold text-sm text-black">واریز</button>
                <button onClick={() => setActiveTab('wallet')} className="gold-btn-secondary py-2 rounded-xl font-bold text-sm border border-amber-500/30">برداشت</button>
              </div>
            </div>
            
            <div onClick={() => setShowBonusModal(true)} className="luxury-card p-4 border border-amber-500/20 rounded-2xl flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3"><Flame className="text-amber-400" /> <div>استریک روزانه</div></div>
              <ChevronRight className="text-amber-400" />
            </div>
          </div>
        )}

        {/* سایر بخش‌ها (تب‌ها) اینجا قرار می‌گیرند */}
        {activeTab === 'tasks' && (
          <div className="space-y-3">
            {tasks.map(t => (
              <div key={t.id} className="luxury-card p-4 border border-amber-500/10 rounded-2xl flex justify-between items-center">
                <span>{t.title}</span>
                <span className="text-amber-400">+{t.reward}</span>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* مودال بونس */}
      {showBonusModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50">
          <div className="bg-[#121620] p-6 rounded-2xl border border-amber-500/30 text-center">
            <h3 className="font-bold mb-4">پاداش دریافت شد!</h3>
            <button onClick={() => { setBalance(b => b + 20); setShowBonusModal(false); }} className="bg-amber-500 text-black px-6 py-2 rounded-xl">بستن</button>
          </div>
        </div>
      )}

      {/* نویگیشن */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 bg-[#080a0f] border-t border-amber-500/10 flex justify-around">
        <button onClick={() => setActiveTab('home')}><Home /></button>
        <button onClick={() => setActiveTab('tasks')}><CheckSquare /></button>
        <button onClick={() => setActiveTab('predict')}><TrendingUp /></button>
        <button onClick={() => setActiveTab('wallet')}><Wallet /></button>
        <button onClick={() => setActiveTab('profile')}><User /></button>
      </nav>
    </div>
  );
}
