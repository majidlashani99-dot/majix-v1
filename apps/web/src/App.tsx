import React, { useState } from 'react';
import { 
  Trophy, 
  Wallet, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Bell, 
  User as UserIcon,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  Flame,
  ChevronRight,
  ShieldCheck,
  Zap,
  Gift
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'predict' | 'wallet' | 'profile'>('home');
  const [balance, setBalance] = useState<number>(12480);
  const [xp, setXp] = useState<number>(3450);
  const [streakDays, setStreakDays] = useState<number>(4);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleClaimReward = (amount: number, xpAmount: number, title: string) => {
    setBalance(prev => prev + amount);
    setXp(prev => prev + xpAmount);
    showToast(`پاداش دریافت شد: +${amount} MJX`);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#03070B] text-slate-100 font-sans select-none pb-24 flex justify-center">
      {toastMessage && (
        <div className="fixed top-4 z-50 bg-gradient-to-r from-amber-500 to-[#F5B72E] text-black px-4 py-2 rounded-2xl font-black text-xs shadow-xl shadow-amber-500/20 flex items-center gap-2 border border-yellow-300">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="w-full max-w-md min-h-screen flex flex-col bg-[#050B11] border-x border-slate-900/80 shadow-2xl relative">
        <header className="px-5 pt-5 pb-3 flex items-center justify-between border-b border-slate-800/60 bg-[#03070B]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F5B72E] via-amber-600 to-yellow-200 p-[1.5px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#071018] rounded-2xl flex items-center justify-center font-black text-[#F5B72E] text-base">
                  M
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-[#F5B72E] text-black text-[9px] font-black px-1.5 py-0.2 rounded-full border border-[#03070B]">
                LVL 4
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-black text-white">مجید لشنی</h2>
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5B72E]" />
              </div>
              <span className="text-[11px] font-mono text-slate-400">@majidlashani99</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#0B1520] border border-slate-800 px-2.5 py-1 rounded-xl text-xs font-mono text-amber-400">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{streakDays}D</span>
            </div>
            <button className="p-2 rounded-xl bg-[#0B1520] border border-slate-800 text-slate-300 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#F5B72E] rounded-full" />
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 pt-4 space-y-4">
          {activeTab === 'home' && (
            <>
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-[#0F1E2E] via-[#09131C] to-[#04080D] border border-[#F5B72E]/30 shadow-xl shadow-amber-950/20 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#F5B72E]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-400 tracking-wide">کل موجودی توکن مجیکس</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F5B72E]/10 border border-[#F5B72E]/30 text-[#F5B72E]">
                    شبکه اصلی TON
                  </span>
                </div>

                <div className="flex items-baseline gap-2 my-2">
                  <h1 className="text-4xl font-black font-mono tracking-tight text-white">
                    {balance.toLocaleString('fa-IR')}
                  </h1>
                  <span className="text-lg font-black text-[#F5B72E]">MJX</span>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-5">
                  معادل تقریبی: <span className="text-emerald-400 font-bold">${(balance * 0.015).toFixed(2)} USD</span>
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  <button 
                    onClick={() => setActiveTab('wallet')}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-[#F5B72E] to-yellow-400 text-black font-black text-xs shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition"
                  >
                    <ArrowDownLeft className="w-4 h-4 stroke-[2.5]" />
                    واریز و برداشت
                  </button>
                  <button 
                    onClick={() => setActiveTab('tasks')}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#0B1520] border border-slate-700 text-slate-200 hover:text-white font-bold text-xs hover:border-slate-600 active:scale-95 transition"
                  >
                    <Zap className="w-4 h-4 text-[#F5B72E]" />
                    کسب سریع MJX
                  </button>
                </div>
              </div>

              <div className="bg-[#0A121A] border border-slate-800/80 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#F5B72E]" />
                    <span className="text-xs font-bold text-white">جایزه ورود روزانه</span>
                  </div>
                  <span className="text-[11px] text-slate-400">روز {streakDays} از ۷</span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 mb-3">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => {
                    const isPassed = day <= streakDays;
                    const isNext = day === streakDays + 1;
                    return (
                      <div 
                        key={day}
                        className={`flex flex-col items-center justify-center py-2 rounded-xl border text-center transition ${
                          isPassed 
                            ? 'bg-[#F5B72E]/10 border-[#F5B72E]/50 text-[#F5B72E]' 
                            : isNext 
                            ? 'bg-slate-800 border-[#F5B72E] text-white animate-pulse' 
                            : 'bg-[#060D14] border-slate-800/80 text-slate-600'
                        }`}
                      >
                        <span className="text-[9px]">روز {day}</span>
                        <span className="text-[11px] font-black font-mono mt-0.5">+{day * 50}</span>
                      </div>
                    );
                  })}
                </div>

                <button 
                  onClick={() => {
                    setStreakDays(prev => Math.min(prev + 1, 7));
                    handleClaimReward((streakDays + 1) * 50, 50, 'پاداش روزانه');
                  }}
                  className="w-full py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#F5B72E] text-[#F5B72E] font-black text-xs transition active:scale-95"
                >
                  دریافت پاداش امروز ({(streakDays + 1) * 50} MJX)
                </button>
              </div>

              <div 
                onClick={() => setActiveTab('predict')}
                className="bg-gradient-to-r from-[#0C1722] to-[#122233] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#F5B72E]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">پیش‌بینی و ترید زنده</h4>
                    <p className="text-[10px] text-slate-400">ضرایب ویژه مسابقات امشب + سیگنال ایچیموکو</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 rotate-180" />
              </div>
            </>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-400 px-1">وظایف ویژه تریدرها</h3>
              {[
                { id: '1', title: 'عضویت در کانال سیگنال تلگرام MAJIX', reward: 250, xp: 80 },
                { id: '2', title: 'دنبال کردن صفحه توییتر رسمی', reward: 150, xp: 50 },
                { id: '3', title: 'مشاهده ویدیو استراتژی ایچیموکو مجیکس', reward: 300, xp: 100 },
                { id: '4', title: 'دعوت ۳ نفر از دوستان تریدر', reward: 1000, xp: 300 },
              ].map((task) => (
                <div key={task.id} className="bg-[#0A121A] border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">{task.title}</h4>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-xs font-black text-[#F5B72E]">+{task.reward} MJX</span>
                      <span className="text-[10px] text-slate-500">+{task.xp} XP</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleClaimReward(task.reward, task.xp, task.title)}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#F5B72E] text-black font-black text-xs active:scale-95 transition"
                  >
                    انجام
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'predict' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-xs font-black text-slate-400">مسابقات در حال برگزاری</h3>
                <span className="text-[11px] text-[#F5B72E] font-mono">هزینه شرط: 100 MJX</span>
              </div>

              {[
                { id: '1', match: 'رئال مادرید - منچسترسیتی', time: 'امشب ۲۳:۰۰', odd1: 2.35, oddX: 3.40, odd2: 2.80 },
                { id: '2', match: 'بیت‌کوین بالای 95,000$ (۲۴ ساعت آینده)', time: 'مارکت کریپتو', odd1: 1.85, oddX: 0, odd2: 1.95 },
              ].map((m) => (
                <div key={m.id} className="bg-[#0A121A] border border-slate-800 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2">
                    <span className="font-bold text-white">{m.match}</span>
                    <span className="text-[#F5B72E] font-mono">{m.time}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => {
                        if (balance >= 100) {
                          setBalance(b => b - 100);
                          showToast('پیش‌بینی با موفقیت ثبت شد!');
                        } else {
                          showToast('موجودی ناکافی است!');
                        }
                      }}
                      className="py-2 rounded-xl bg-[#060D14] border border-slate-800 hover:border-[#F5B72E] text-center transition"
                    >
                      <span className="block text-[10px] text-slate-400">گزینه اول</span>
                      <span className="text-xs font-mono font-black text-[#F5B72E]">{m.odd1}x</span>
                    </button>
                    <button 
                      onClick={() => {
                        if (balance >= 100) {
                          setBalance(b => b - 100);
                          showToast('پیش‌بینی با موفقیت ثبت شد!');
                        } else {
                          showToast('موجودی ناکافی است!');
                        }
                      }}
                      className="py-2 rounded-xl bg-[#060D14] border border-slate-800 hover:border-[#F5B72E] text-center transition"
                    >
                      <span className="block text-[10px] text-slate-400">گزینه دوم</span>
                      <span className="text-xs font-mono font-black text-[#F5B72E]">{m.odd2}x</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'wallet' && (
            <div className="space-y-4">
              <div className="bg-[#0A121A] border border-slate-800 rounded-3xl p-6 text-center">
                <span className="text-xs text-slate-400">موجودی مجیکس برای برداشت</span>
                <div className="text-3xl font-black font-mono text-[#F5B72E] my-3">{balance.toLocaleString('fa-IR')} MJX</div>
                <p className="text-[11px] text-slate-500 mb-5">حداقل سقف برداشت مجاز: 20,000 MJX</p>
                <button 
                  disabled={balance < 20000}
                  className="w-full py-2.5 rounded-xl bg-[#F5B72E] disabled:bg-slate-800 disabled:text-slate-600 text-black font-black text-xs transition"
                >
                  انتقال به کیف پول TON
                </button>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-[#0A121A] border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5B72E]/10 border border-[#F5B72E]/30 flex items-center justify-center text-[#F5B72E] font-black text-lg">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">مجید لشنی</h3>
                  <span className="text-[11px] text-[#F5B72E]">توسعه‌دهنده اندیکاتور MAJIX</span>
                </div>
              </div>

              <div className="bg-[#0A121A] border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="text-xs text-slate-400">لینک اختصاصی دعوت دوستان</span>
                <div className="flex items-center justify-between bg-[#060D14] p-2.5 rounded-xl border border-slate-800 font-mono text-xs text-[#F5B72E]">
                  <span>https://t.me/majix_bot?start=MJ770</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('https://t.me/majix_bot?start=MJ770');
                      showToast('لینک دعوت کپی شد');
                    }}
                    className="text-white bg-slate-800 px-3 py-1 rounded-lg text-xs font-bold"
                  >
                    کپی
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#04080E]/95 backdrop-blur-xl border-t border-slate-800/80 px-3 py-2 flex justify-around items-center z-50">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition ${activeTab === 'home' ? 'text-[#F5B72E]' : 'text-slate-500'}`}
          >
            <Sparkles className="w-5 h-5" />
            خانه
          </button>
          <button 
            onClick={() => setActiveTab('tasks')} 
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition ${activeTab === 'tasks' ? 'text-[#F5B72E]' : 'text-slate-500'}`}
          >
            <CheckCircle2 className="w-5 h-5" />
            تسک‌ها
          </button>
          <button 
            onClick={() => setActiveTab('predict')} 
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition ${activeTab === 'predict' ? 'text-[#F5B72E]' : 'text-slate-500'}`}
          >
            <TrendingUp className="w-5 h-5" />
            پیش‌بینی
          </button>
          <button 
            onClick={() => setActiveTab('wallet')} 
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition ${activeTab === 'wallet' ? 'text-[#F5B72E]' : 'text-slate-500'}`}
          >
            <Wallet className="w-5 h-5" />
            کیف پول
          </button>
          <button 
            onClick={() => setActiveTab('profile')} 
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition ${activeTab === 'profile' ? 'text-[#F5B72E]' : 'text-slate-500'}`}
          >
            <UserIcon className="w-5 h-5" />
            پروفایل
          </button>
        </nav>
      </div>
    </div>
  );
}