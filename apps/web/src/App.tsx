import React, { useState, useEffect } from 'react';
import { 
  Home, 
  CheckSquare, 
  TrendingUp, 
  Wallet, 
  User, 
  Bell, 
  Sparkles, 
  ChevronRight, 
  Copy, 
  Play, 
  Flame, 
  ArrowUpRight, 
  ArrowDownLeft, 
  RefreshCw, 
  Gift, 
  Trophy, 
  Share2, 
  CheckCircle2, 
  TrendingDown, 
  Award,
  Layers,
  Send,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'predict' | 'wallet' | 'profile'>('home');
  const [balance, setBalance] = useState(12480);
  const [streakDays, setStreakDays] = useState(3);
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // شبیه‌سازی وضعیت تسک‌ها
  const [tasks, setTasks] = useState([
    { id: 1, title: 'تماشای ویدیو یوتیوب', reward: 150, type: 'video', done: false, icon: 'youtube' },
    { id: 2, title: 'فالو کردن اینستاگرام', reward: 100, type: 'social', done: false, icon: 'instagram' },
    { id: 3, title: 'عضویت در کانال تلگرام', reward: 100, type: 'social', done: false, icon: 'telegram' },
    { id: 4, title: 'دعوت از ۳ دوست جدید', reward: 500, type: 'referral', done: false, icon: 'users' },
  ]);

  // متغیرهای بخش باینری تریدینگ
  const [binaryTimeframe, setBinaryTimeframe] = useState<'60s' | '120s' | '300s'>('60s');
  const [binaryAmount, setBinaryAmount] = useState(100);
  const [predictDirection, setPredictDirection] = useState<'UP' | 'DOWN' | null>(null);

  const handleClaimBonus = () => {
    setBalance(prev => prev + 20);
    setStreakDays(prev => prev + 1);
    setShowBonusModal(false);
  };

  const handleCompleteTask = (id: number, reward: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: true } : t));
    setBalance(prev => prev + reward);
  };

  const copyReferral = () => {
    navigator.clipboard.writeText('https://t.me/majix_bot?start=ref_MAJIX1234');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080a0f] text-white pb-24 font-sans select-none" dir="rtl">
      
      {/* 👑 هدر اختصاصی لوکس */}
      <header className="px-5 pt-4 pb-3 flex items-center justify-between sticky top-0 z-30 bg-[#080a0f]/90 backdrop-blur-md border-b border-amber-500/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-700 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <div className="w-full h-full rounded-full bg-[#121620] flex items-center justify-center font-black text-amber-400 text-lg">
                M
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-[10px] font-black px-1.5 py-0.2 rounded-full border border-black">
              L5
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-wide text-white">Majid</span>
              <span className="text-[11px] bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-md font-semibold">
                Level 5
              </span>
            </div>
            {/* نوار XP */}
            <div className="flex items-center gap-2 mt-1">
              <div className="w-24 h-1.5 bg-[#1a202c] rounded-full overflow-hidden border border-amber-500/20">
                <div className="w-[75%] h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full"></div>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">750/1000 XP</span>
            </div>
          </div>
        </div>

        {/* دکمه نوتیفیکیشن */}
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#131822] border border-amber-500/20 flex items-center justify-center text-amber-400 hover:border-amber-500/50 relative shadow-inner">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          </button>
        </div>
      </header>

      {/* 📱 محتوای اصلی بر اساس تب فعال */}
      <main className="flex-1 px-4 pt-3 max-w-lg mx-auto w-full">
        
        {/* ================= تب ۱: صفحه خانه (HOME) ================= */}
        {activeTab === 'home' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* 💎 کارت بالانس اصلی (MAJIX BALANCE CARD) */}
            <div className="luxury-card luxury-card-glow p-5 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-300/80 text-xs font-medium tracking-wider uppercase">
                    <Sparkles size={13} className="text-amber-400" />
                    <span>MAJIX BALANCE / موجودی کل</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
                      {balance.toLocaleString()}
                    </h1>
                    <span className="gold-gradient-text text-lg font-extrabold tracking-wider">MJX</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 font-mono">
                    ≈ ${(balance * 0.001).toFixed(2)} USD
                  </p>
                </div>

                {/* 🪙 مدال طلایی سه‌بعدی */}
                <div className="w-16 h-16 rounded-full token-gold-emblem flex items-center justify-center relative shadow-2xl">
                  <div className="w-13 h-13 rounded-full border border-yellow-100/50 flex items-center justify-center">
                    <span className="text-2xl font-black text-slate-950 font-serif drop-shadow">M</span>
                  </div>
                </div>
              </div>

              {/* دکمه‌های واریز و برداشت */}
              <div className="grid grid-cols-2 gap-3 mt-5 relative z-10">
                <button 
                  onClick={() => setActiveTab('wallet')}
                  className="gold-btn-primary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                  <ArrowDownLeft size={16} className="stroke-[2.5]" />
                  <span>واریز (Deposit)</span>
                </button>
                <button 
                  onClick={() => setActiveTab('wallet')}
                  className="gold-btn-secondary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <ArrowUpRight size={16} className="text-amber-400" />
                  <span>برداشت (Withdraw)</span>
                </button>
              </div>

              {/* نوار پیشرفت برداشت (Withdrawal Progress) */}
              <div className="mt-4 pt-4 border-t border-amber-500/15">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-gray-300 font-medium">پیشرفت تا حداقل برداشت</span>
                  <span className="text-amber-400 font-mono font-bold">{balance.toLocaleString()} / 20,000 MJX (62%)</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-amber-500/20">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full w-[62%] transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* 🎁 بنر بونس روزانه و استریک */}
            <div 
              onClick={() => setShowBonusModal(true)}
              className="luxury-card p-3.5 flex items-center justify-between cursor-pointer border-amber-500/30 hover:border-amber-500/60 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Flame size={20} className="animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">استریک و بونس روزانه</span>
                    <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-1.5 py-0.5 rounded font-bold">
                      +{streakDays * 10 + 10} MJX
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {streakDays} روز متوالی فعال بودید! روی باکس کلیک کنید
                  </p>
                </div>
              </div>
              <ChevronRight size={18} className="text-amber-400 group-hover:translate-x-1 transition" />
            </div>

            {/* 📺 تسک ویژه ویدیو (Featured Banner) */}
            <div className="luxury-card p-4 relative overflow-hidden bg-gradient-to-l from-red-950/40 via-[#121620] to-[#121620] border-red-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <Play size={22} className="fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 tracking-wider">تسک ویدیویی ویژه</span>
                    <h3 className="text-sm font-black text-white mt-0.5">تماشای ویدیو تحلیل ماژیکس</h3>
                    <p className="text-xs text-amber-400 font-bold font-mono mt-0.5">+150 MJX پاداش فوری</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleCompleteTask(1, 150)}
                  className="gold-btn-primary px-4 py-2 rounded-xl text-xs font-bold"
                >
                  شروع
                </button>
              </div>
            </div>

            {/* 🚀 دسترسی سریع (Quick Actions Grid) */}
            <div>
              <h2 className="text-xs font-bold text-gray-400 mb-2.5 px-1">دسترسی سریع به بخش‌ها</h2>
              <div className="grid grid-cols-2 gap-2.5">
                <div 
                  onClick={() => setActiveTab(' overflow-hidden bg-gradient-to-l from-red-950/40 via-[#121620] to-[#121620] border-red-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <Play size={22} className="fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 tracking-wider">تسک ویدیویی ویژه</span>
                    <h3 className="text-sm font-black text-white mt-0.5">تماشای ویدیو تحلیل ماژیکس</h3>
                    <p className="text-xs text-amber-400 font-bold font-mono mt-0.5">+150 MJX پاداش فوری</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleCompleteTask(1, 150)}
                  className="gold-btn-primary px-4 py-2 rounded-xl text-xs font-bold"
                >
                  شروع
                </button>
              </div>
            </div>

            {/* 🚀 دسترسی سریع (Quick Actions Grid) */}
            <div>
              <h2 className="text-xs font-bold text-gray-400 mb-2.5 px-1">دسترسی سریع به بخش‌ها</h2>
              <div className="grid grid-cols-2 gap-2.5">
                <div 
                  onClick={() => setActiveTab('tasks')}
                  className="luxury-card p-3.5 flex items-center gap-3 cursor-pointer hover:border-amber-500/50 transition active:scale-98"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-} />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">کیف پول دیجیتال</span>
                    <span className="text-[10px] text-gray-400">واریز و برداشت USDT</span>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveTab('profile')}
                  className="luxury-card p-3.5 flex items-center gap-3 cursor-pointer hover:border-amber-500/50 transition active:scale-98"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Share2 size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">دعوت دوستان</span>
                    <span className="text-[10px] text-purple-400 font-mono">+500 MJX به ازای هر نفر</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= تب ۲: لیست تسک‌ها (TASKS) ================= */}
        {activeTab === 'tasks' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="luxury-card p-4 text-center">
              <h2 className="text-lg font-black gold-gradient-text">مرکز ماموریت‌ها و جوایز</h2>
              <p className="text-xs text-gray-400 mt-1">تسک‌ها را انجام دهید و بالانس MJX خود را به رایگان افزایش دهید!</p>
            </div>

            <div className="space-y-2.5">
              {tasks.map(task => (
                <div key={task.id} className="luxury-card p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <CheckSquare size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{task.title}</h4>
                      <span className="text-amber-400 text-xs font-bold font-mono">+{task.reward} MJX</span>
                    </div>
                  </div>
                  <button 
                    disabled={task.done}
                    onClick={() => handleCompleteTask(task.id, task.reward)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                      task.done 
                        ? 'bg-slate-800 text-gray-500 border border-gray-700' 
                        : 'gold-btn-primary'
                    }`}
                  >
                    {task.done ? 'انجام شد ✓' : 'دریافت پاداش'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= تب ۳: باینری تریدینگ (PREDICT & TRADE) ================= */}
        {activeTab === 'predict' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* هدر جفت ارز */}
            <div className="luxury-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black text-xs">₿</div>
                <div>
                  <span className="font-extrabold text-sm text-white">BTC / USDT</span>
                  <span className="text-[10px] text-emerald-400 block font-mono font-bold">+2.48% (Bullish)</span>
                </div>
              </div>
              <div className="text-left">
                <span className="text-xs text-gray-400 block">قیمت زنده</span>
                <span className="font-mono text-base font-black text-amber-400">$64,820.50</span>
              </div>
            </div>

            {/* چارت شماتیک ترید */}
            <div className="luxury-card p-4 relative h-48 flex items-end justify-between gap-1 overflow-hidden">
              <div className="absolute top-3 left-3 text-[10px] text-gray-400 font-mono">MAJIX Master Indicator v4</div>
              {/* کندل‌های شبیه‌سازی شده */}
              {[40, 65, 50, 75, 60, 90, 80, 110, 95, 130, 115, 140, 120, 160].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div 
                    style={{ height: `${val}px` }} 
                    className={`w-full rounded-t-sm ${idx % 2 === 0 ? 'bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]'}`}
                  ></div>
                </div>
              ))}
            </div>

            {/* تایم فریم‌ها */}
            <div className="grid grid-cols-3 gap-2">
              {(['60s', '120s', '300s'] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setBinaryTimeframe(tf)}
                  className={`py-2 rounded-xl text-xs font-mono font-bold border transition ${
                    binaryTimeframe === tf 
                      ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]' 
                      : 'bg-slate-900/80 text-gray-400 border-gray-800'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* دکمه‌های ترید UP و DOWN */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => {
                  setPredictDirection('UP');
                  setBalance(prev => prev + 83);
                }}
                className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.4)] border border-emerald-400/50 transition"
              >
                <TrendingUp size={20} />
                <span>صعودی (UP 83%)</span>
              </button>

              <button 
                onClick={() => {
                  setPredictDirection('DOWN');
                  setBalance(prev => prev + 83);
                }}
                className="bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(244,63,94,0.4)] border border-rose-400/50 transition"
              >
                <TrendingDown size={20} />
                <span>نزولی (DOWN 83%)</span>
              </button>
            </div>

          </div>
        )}

        {/* ================= تب ۴: کیف پول (WALLET) ================= */}
        {activeTab === 'wallet' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="luxury-card p-5 text-center">
              <span className="text-xs text-gray-400 font-medium">موجودی قابل برداشت شما</span>
              <div className="text-3xl font-black text-amber-400 font-mono mt-1">{balance.toLocaleString()} MJX</div>
              <span className="text-xs text-gray-400 font-mono mt-0.5 block">معادل {(balance * 0.001).toFixed(2)} دلار تتر (USDT)</span>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <button className="gold-btn-primary py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2">
                  <ArrowDownLeft size={16} />
                  <span>شارژ با تتر TRC20</span>
                </button>
                <button className="gold-btn-secondary py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2">
                  <ArrowUpRight size={16} className="text-amber-400" />
                  <span>تسویه آنی</span>
                </button>
              </div>
            </div>

            {/* تاریخچه تراکنش‌ها */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-2 px-1">تراکنش‌های اخیر</h3>
              <div className="space-y-2">
                {[
                  { title: 'پاداش تسک ویدیویی', amount: '+150 MJX', time: 'لحظاتی پیش', type: 'in' },
                  { title: 'پیش‌بینی باینری موفق', amount: '+83 MJX', time: '۲ ساعت پیش', type: 'in' },
                  { title: 'بونس استریک روزانه', amount: '+20 MJX', time: 'دیروز', type: 'in' },
                ].map((tx, idx) => (
                  <div key={idx} className="luxury-card p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                        ↓
                      </div>
                      <div>
                        <span className="font-bold text-white block">{tx.title}</span>
                        <span className="text-[10px] text-gray-400">{tx.time}</span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-emerald-400">{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= تب ۵: پروفایل و رفرال (PROFILE) ================= */}
        {activeTab === 'profile' && (
          <div className="space-y-4 animate-fadeIn">
            {/* کارت کاربر */}
            <div className="luxury-card p-5 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full mx-auto p-1 bg-gradient-to-tr from-amber-500 to-yellow-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                <div className="w-full h-full rounded-full bg-[#121620] flex items-center justify-center text-amber-400 font-black text-2xl">
                  M
                </div>
              </div>
              <h2 className="text-lg font-black text-white mt-2.5">Majid (Majix)</h2>
              <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs px-2.5 py-0.5 rounded-full font-bold mt-1">
                VIP Trader • Level 5
              </span>

              {/* باکس کد رفرال */}
              <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-center justify-between">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block">لینک دعوت اختصاصی شما</span>
                  <span className="font-mono font-bold text-xs text-amber-400">MAJIX1234</span>
                </div>
                <button 
                  onClick={copyReferral}
                  className="gold-btn-primary px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                >
                  <Copy size={13} />
                  <span>{copySuccess ? 'کپی شد!' : 'کپی لینک'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* 🎁 مودال بونس روزانه */}
      {showBonusModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="luxury-card luxury-card-glow max-w-sm w-full p-6 text-center animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mx-auto mb-3 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Gift size={32} />
            </div>
            <h3 className="text-lg font-black gold-gradient-text">پاداش استریک روزانه!</h3>
            <p className="text-xs text-gray-300 mt-1">
              شما {streakDays} روز متوالی وارد ماژیکس شدید و پاداش امروز شما آماده است:
            </p>
            <div className="my-4 py-3 bg-slate-900 rounded-xl border border-amber-500/30">
              <span className="text-2xl font-black text-amber-400 font-mono">+20 MJX</span>
            </div>
            <button 
              onClick={handleClaimBonus}
              className="gold-btn-primary w-full py-3 rounded-xl text-sm font-black"
            >
              دریافت پاداش و بستن
            </button>
          </div>
        </div>
      )}

      {/* 🧭 نویگیشن‌بار شناور و لوکس پایین صفحه (Bottom Navigation) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 luxury-nav px-4 py-2">
        <div className="max-w-lg mx-auto flex items-center justify-around">
          
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'home' ? 'text-amber-400 scale-105' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Home size={20} className={activeTab === 'home' ? 'stroke-[2.5]' : 'stroke-2'} />
            <span className="text-[11px] font-bold">خانه</span>
          </button>

          <button 
            onClick={() => setActiveTab('tasks')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'tasks' ? 'text-amber-40@'
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  CheckSquare, 
  TrendingUp, 
  Wallet, 
  User, 
  Bell, 
  Sparkles, 
  ChevronRight, 
  Copy, 
  Play, 
  Flame, 
  ArrowUpRight, 
  ArrowDownLeft, 
  RefreshCw, 
  Gift, 
  Trophy, 
  Share2, 
  CheckCircle2, 
  TrendingDown, 
  Award,
  Layers,
  Send,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'predict' | 'wallet' | 'profile'>('home');
  const [balance, setBalance] = useState(12480);
  const [streakDays, setStreakDays] = useState(3);
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // شبیه‌سازی وضعیت تسک‌ها
  const [tasks, setTasks] = useState([
    { id: 1, title: 'تماشای ویدیو یوتیوب', reward: 150, type: 'video', done: false, icon: 'youtube' },
    { id: 2, title: 'فالو کردن اینستاگرام', reward: 100, type: 'social', done: false, icon: 'instagram' },
    { id: 3, title: 'عضویت در کانال تلگرام', reward: 100, type: 'social', done: false, icon: 'telegram' },
    { id: 4, title: 'دعوت از ۳ دوست جدید', reward: 500, type: 'referral', done: false, icon: 'users' },
  ]);

  // متغیرهای بخش باینری تریدینگ
  const [binaryTimeframe, setBinaryTimeframe] = useState<'60s' | '120s' | '300s'>('60s');
  const [binaryAmount, setBinaryAmount] = useState(100);
  const [predictDirection, setPredictDirection] = useState<'UP' | 'DOWN' | null>(null);

  const handleClaimBonus = () => {
    setBalance(prev => prev + 20);
    setStreakDays(prev => prev + 1);
    setShowBonusModal(false);
  };

  const handleCompleteTask = (id: number, reward: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: true } : t));
    setBalance(prev => prev + reward);
  };

  const copyReferral = () => {
    navigator.clipboard.writeText('https://t.me/majix_bot?start=ref_MAJIX1234');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080a0f] text-white pb-24 font-sans select-none" dir="rtl">
      
      {/* 👑 هدر اختصاصی لوکس */}
      <header className="px-5 pt-4 pb-3 flex items-center justify-between sticky top-0 z-30 bg-[#080a0f]/90 backdrop-blur-md border-b border-amber-500/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-700 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <div className="w-full h-full rounded-full bg-[#121620] flex items-center justify-center font-black text-amber-400 text-lg">
                M
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-[10px] font-black px-1.5 py-0.2 rounded-full border border-black">
              L5
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-wide text-white">Majid</span>
              <span className="text-[11px] bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-md font-semibold">
                Level 5
              </span>
            </div>
            {/* نوار XP */}
            <div className="flex items-center gap-2 mt-1">
              <div className="w-24 h-1.5 bg-[#1a202c] rounded-full overflow-hidden border border-amber-500/20">
                <div className="w-[75%] h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full"></div>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">750/1000 XP</span>
            </div>
          </div>
        </div>

        {/* دکمه نوتیفیکیشن */}
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#131822] border border-amber-500/20 flex items-center justify-center text-amber-400 hover:border-amber-500/50 relative shadow-inner">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          </button>
        </div>
      </header>

      {/* 📱 محتوای اصلی بر اساس تب فعال */}
      <main className="flex-1 px-4 pt-3 max-w-lg mx-auto w-full">
        
        {/* ================= تب ۱: صفحه خانه (HOME) ================= */}
        {activeTab === 'home' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* 💎 کارت بالانس اصلی (MAJIX BALANCE CARD) */}
            <div className="luxury-card luxury-card-glow p-5 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-300/80 text-xs font-medium tracking-wider uppercase">
                    <Sparkles size={13} className="text-amber-400" />
                    <span>MAJIX BALANCE / موجودی کل</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
                      {balance.toLocaleString()}
                    </h1>
                    <span className="gold-gradient-text text-lg font-extrabold tracking-wider">MJX</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 font-mono">
                    ≈ ${(balance * 0.001).toFixed(2)} USD
                  </p>
                </div>

                {/* 🪙 مدال طلایی سه‌بعدی */}
                <div className="w-16 h-16 rounded-full token-gold-emblem flex items-center justify-center relative shadow-2xl">
                  <div className="w-13 h-13 rounded-full border border-yellow-100/50 flex items-center justify-center">
                    <span className="text-2xl font-black text-slate-950 font-serif drop-shadow">M</span>
                  </div>
                </div>
              </div>

              {/* دکمه‌های واریز و برداشت */}
              <div className="grid grid-cols-2 gap-3 mt-5 relative z-10">
                <button 
                  onClick={() => setActiveTab('wallet')}
                  className="gold-btn-primary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                  <ArrowDownLeft size={16} className="stroke-[2.5]" />
                  <span>واریز (Deposit)</span>
                </button>
                <button 
                  onClick={() => setActiveTab('wallet')}
                  className="gold-btn-secondary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <ArrowUpRight size={16} className="text-amber-400" />
                  <span>برداشت (Withdraw)</span>
                </button>
              </div>

              {/* نوار پیشرفت برداشت (Withdrawal Progress) */}
              <div className="mt-4 pt-4 border-t border-amber-500/15">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-gray-300 font-medium">پیشرفت تا حداقل برداشت</span>
                  <span className="text-amber-400 font-mono font-bold">{balance.toLocaleString()} / 20,000 MJX (62%)</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-amber-500/20">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full w-[62%] transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* 🎁 بنر بونس روزانه و استریک */}
            <div 
              onClick={() => setShowBonusModal(true)}
              className="luxury-card p-3.5 flex items-center justify-between cursor-pointer border-amber-500/30 hover:border-amber-500/60 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Flame size={20} className="animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">استریک و بونس روزانه</span>
                    <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-1.5 py-0.5 rounded font-bold">
                      +{streakDays * 10 + 10} MJX
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {streakDays} روز متوالی فعال بودید! روی باکس کلیک کنید
                  </p>
                </div>
              </div>
              <ChevronRight size={18} className="text-amber-400 group-hover:translate-x-1 transition" />
            </div>

            {/* 📺 تسک ویژه ویدیو (Featured Banner) */}
            <div className="luxury-card p-4 relative overflow-hidden bg-gradient-to-l from-red-950/40 via-[#121620] to-[#121620] border-red-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <Play size={22} className="fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 tracking-wider">تسک ویدیویی ویژه</span>
                    <h3 className="text-sm font-black text-white mt-0.5">تماشای ویدیو تحلیل ماژیکس</h3>
                    <p className="text-xs text-amber-400 font-bold font-mono mt-0.5">+150 MJX پاداش فوری</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleCompleteTask(1, 150)}
                  className="gold-btn-primary px-4 py-2 rounded-xl text-xs font-bold"
                >
                  شروع
                </button>
              </div>
            </div>

            {/* 🚀 دسترسی سریع (Quick Actions Grid) */}
            <div>
              <h2 className="text-xs font-bold text-gray-400 mb-2.5 px-1">دسترسی سریع به بخش‌ها</h2>
              <div className="grid grid-cols-2 gap-2.5">
                <div 
                  onClick={() => setActiveTab(' overflow-hidden bg-gradient-to-l from-red-950/40 via-[#121620] to-[#121620] border-red-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <Play size={22} className="fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 tracking-wider">تسک ویدیویی ویژه</span>
                    <h3 className="text-sm font-black text-white mt-0.5">تماشای ویدیو تحلیل ماژیکس</h3>
                    <p className="text-xs text-amber-400 font-bold font-mono mt-0.5">+150 MJX پاداش فوری</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleCompleteTask(1, 150)}
                  className="gold-btn-primary px-4 py-2 rounded-xl text-xs font-bold"
                >
                  شروع
                </button>
              </div>
            </div>

            {/* 🚀 دسترسی سریع (Quick Actions Grid) */}
            <div>
              <h2 className="text-xs font-bold text-gray-400 mb-2.5 px-1">دسترسی سریع به بخش‌ها</h2>
              <div className="grid grid-cols-2 gap-2.5">
                <div 
                  onClick={() => setActiveTab('tasks')}
                  className="luxury-card p-3.5 flex items-center gap-3 cursor-pointer hover:border-amber-500/50 transition active:scale-98"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-} />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">کیف پول دیجیتال</span>
                    <span className="text-[10px] text-gray-400">واریز و برداشت USDT</span>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveTab('profile')}
                  className="luxury-card p-3.5 flex items-center gap-3 cursor-pointer hover:border-amber-500/50 transition active:scale-98"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Share2 size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">دعوت دوستان</span>
                    <span className="text-[10px] text-purple-400 font-mono">+500 MJX به ازای هر نفر</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= تب ۲: لیست تسک‌ها (TASKS) ================= */}
        {activeTab === 'tasks' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="luxury-card p-4 text-center">
              <h2 className="text-lg font-black gold-gradient-text">مرکز ماموریت‌ها و جوایز</h2>
              <p className="text-xs text-gray-400 mt-1">تسک‌ها را انجام دهید و بالانس MJX خود را به رایگان افزایش دهید!</p>
            </div>

            <div className="space-y-2.5">
              {tasks.map(task => (
                <div key={task.id} className="luxury-card p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <CheckSquare size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{task.title}</h4>
                      <span className="text-amber-400 text-xs font-bold font-mono">+{task.reward} MJX</span>
                    </div>
                  </div>
                  <button 
                    disabled={task.done}
                    onClick={() => handleCompleteTask(task.id, task.reward)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                      task.done 
                        ? 'bg-slate-800 text-gray-500 border border-gray-700' 
                        : 'gold-btn-primary'
                    }`}
                  >
                    {task.done ? 'انجام شد ✓' : 'دریافت پاداش'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= تب ۳: باینری تریدینگ (PREDICT & TRADE) ================= */}
        {activeTab === 'predict' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* هدر جفت ارز */}
            <div className="luxury-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black text-xs">₿</div>
                <div>
                  <span className="font-extrabold text-sm text-white">BTC / USDT</span>
                  <span className="text-[10px] text-emerald-400 block font-mono font-bold">+2.48% (Bullish)</span>
                </div>
              </div>
              <div className="text-left">
                <span className="text-xs text-gray-400 block">قیمت زنده</span>
                <span className="font-mono text-base font-black text-amber-400">$64,820.50</span>
              </div>
            </div>

            {/* چارت شماتیک ترید */}
            <div className="luxury-card p-4 relative h-48 flex items-end justify-between gap-1 overflow-hidden">
              <div className="absolute top-3 left-3 text-[10px] text-gray-400 font-mono">MAJIX Master Indicator v4</div>
              {/* کندل‌های شبیه‌سازی شده */}
              {[40, 65, 50, 75, 60, 90, 80, 110, 95, 130, 115, 140, 120, 160].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div 
                    style={{ height: `${val}px` }} 
                    className={`w-full rounded-t-sm ${idx % 2 === 0 ? 'bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]'}`}
                  ></div>
                </div>
              ))}
            </div>

            {/* تایم فریم‌ها */}
            <div className="grid grid-cols-3 gap-2">
              {(['60s', '120s', '300s'] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setBinaryTimeframe(tf)}
                  className={`py-2 rounded-xl text-xs font-mono font-bold border transition ${
                    binaryTimeframe === tf 
                      ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]' 
                      : 'bg-slate-900/80 text-gray-400 border-gray-800'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* دکمه‌های ترید UP و DOWN */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => {
                  setPredictDirection('UP');
                  setBalance(prev => prev + 83);
                }}
                className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.4)] border border-emerald-400/50 transition"
              >
                <TrendingUp size={20} />
                <span>صعودی (UP 83%)</span>
              </button>

              <button 
                onClick={() => {
                  setPredictDirection('DOWN');
                  setBalance(prev => prev + 83);
                }}
                className="bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(244,63,94,0.4)] border border-rose-400/50 transition"
              >
                <TrendingDown size={20} />
                <span>نزولی (DOWN 83%)</span>
              </button>
            </div>

          </div>
        )}

        {/* ================= تب ۴: کیف پول (WALLET) ================= */}
        {activeTab === 'wallet' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="luxury-card p-5 text-center">
              <span className="text-xs text-gray-400 font-medium">موجودی قابل برداشت شما</span>
              <div className="text-3xl font-black text-amber-400 font-mono mt-1">{balance.toLocaleString()} MJX</div>
              <span className="text-xs text-gray-400 font-mono mt-0.5 block">معادل {(balance * 0.001).toFixed(2)} دلار تتر (USDT)</span>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <button className="gold-btn-primary py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2">
                  <ArrowDownLeft size={16} />
                  <span>شارژ با تتر TRC20</span>
                </button>
                <button className="gold-btn-secondary py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2">
                  <ArrowUpRight size={16} className="text-amber-400" />
                  <span>تسویه آنی</span>
                </button>
              </div>
            </div>

            {/* تاریخچه تراکنش‌ها */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-2 px-1">تراکنش‌های اخیر</h3>
              <div className="space-y-2">
                {[
                  { title: 'پاداش تسک ویدیویی', amount: '+150 MJX', time: 'لحظاتی پیش', type: 'in' },
                  { title: 'پیش‌بینی باینری موفق', amount: '+83 MJX', time: '۲ ساعت پیش', type: 'in' },
                  { title: 'بونس استریک روزانه', amount: '+20 MJX', time: 'دیروز', type: 'in' },
                ].map((tx, idx) => (
                  <div key={idx} className="luxury-card p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                        ↓
                      </div>
                      <div>
                        <span className="font-bold text-white block">{tx.title}</span>
                        <span className="text-[10px] text-gray-400">{tx.time}</span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-emerald-400">{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= تب ۵: پروفایل و رفرال (PROFILE) ================= */}
        {activeTab === 'profile' && (
          <div className="space-y-4 animate-fadeIn">
            {/* کارت کاربر */}
            <div className="luxury-card p-5 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full mx-auto p-1 bg-gradient-to-tr from-amber-500 to-yellow-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                <div className="w-full h-full rounded-full bg-[#121620] flex items-center justify-center text-amber-400 font-black text-2xl">
                  M
                </div>
              </div>
              <h2 className="text-lg font-black text-white mt-2.5">Majid (Majix)</h2>
              <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs px-2.5 py-0.5 rounded-full font-bold mt-1">
                VIP Trader • Level 5
              </span>

              {/* باکس کد رفرال */}
              <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-center justify-between">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block">لینک دعوت اختصاصی شما</span>
                  <span className="font-mono font-bold text-xs text-amber-400">MAJIX1234</span>
                </div>
                <button 
                  onClick={copyReferral}
                  className="gold-btn-primary px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                >
                  <Copy size={13} />
                  <span>{copySuccess ? 'کپی شد!' : 'کپی لینک'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* 🎁 مودال بونس روزانه */}
      {showBonusModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="luxury-card luxury-card-glow max-w-sm w-full p-6 text-center animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mx-auto mb-3 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Gift size={32} />
            </div>
            <h3 className="text-lg font-black gold-gradient-text">پاداش استریک روزانه!</h3>
            <p className="text-xs text-gray-300 mt-1">
              شما {streakDays} روز متوالی وارد ماژیکس شدید و پاداش امروز شما آماده است:
            </p>
            <div className="my-4 py-3 bg-slate-900 rounded-xl border border-amber-500/30">
              <span className="text-2xl font-black text-amber-400 font-mono">+20 MJX</span>
            </div>
            <button 
              onClick={handleClaimBonus}
              className="gold-btn-primary w-full py-3 rounded-xl text-sm font-black"
            >
              دریافت پاداش و بستن
            </button>
          </div>
        </div>
      )}

      {/* 🧭 نویگیشن‌بار شناور و لوکس پایین صفحه (Bottom Navigation) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 luxury-nav px-4 py-2">
        <div className="max-w-lg mx-auto flex items-center justify-around">
          
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'home' ? 'text-amber-400 scale-105' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Home size={20} className={activeTab === 'home' ? 'stroke-[2.5]' : 'stroke-2'} />
            <span className="text-[11px] font-bold">خانه</span>
          </button>

          <button 
            onClick={() => setActiveTab('tasks')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'tasks' ? 'text-amber-400 scale-105' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <CheckSquare size={20} className={activeTab === 'tasks' ? 'stroke-[2.5]' : 'stroke-2'} />
            <span className="text-[11px] font-bold">تسک‌ها</span>
          </button>

          <button 
            onClick={() => setActiveTab('predict')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'predict' ? 'text-amber-400 scale-105' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <TrendingUp size={20} className={activeTab === 'predict' ? 'stroke-[2.5]' : 'stroke-2'} />
            <span className="text-[11px] font-bold">ترید و پیش‌بینی</span>
          </button>

          <button 
            onClick={() => setActiveTab('wallet')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'wallet' ? 'text-amber-400 scale-105' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Wallet size={20} className={activeTab === 'wallet' ? 'stroke-[2.5]' : 'stroke-2'} />
            <span className="text-[11px] font-bold">کیف پول</span>
          </button>

          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === 'profile' ? 'text-amber-400 scale-105' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <User size={20} className={activeTab === 'profile' ? 'stroke-[2.5]' : 'stroke-2'} />
            <span className="text-[11px] font-bold">پروفایل</span>
          </button>

        </div>
      </nav>

    </div>
  );
}
