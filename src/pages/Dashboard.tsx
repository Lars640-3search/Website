import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { BarChart3, TrendingUp, Wallet, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardContent = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const portfolioItems = [
    { name: "TechVenture AI", value: "$125,000", change: "+12.5%", positive: true },
    { name: "GreenEnergy Solutions", value: "$85,000", change: "+8.2%", positive: true },
    { name: "CyberShield Pro", value: "$62,500", change: "-2.1%", positive: false },
    { name: "CloudScale Inc", value: "$45,000", change: "+15.8%", positive: true },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[hsl(220,20%,6%)]' : 'bg-gray-50'
    }`}>
      <ThemeSwitcher />
      
      {/* Header */}
      <header className={`border-b transition-colors duration-500 ${
        isDark ? 'bg-[hsl(220,20%,6%)] border-white/10' : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button 
                variant="ghost" 
                size="sm"
                className={isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className={`font-body text-xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Investor Dashboard
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-xl border transition-colors duration-500 ${
            isDark 
              ? 'bg-[hsl(220,18%,10%)] border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <p className={`font-body text-sm ${
                isDark ? 'text-gray-muted' : 'text-gray-600'
              }`}>Total Invested</p>
            </div>
            <p className={`font-body text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>$317,500</p>
          </div>

          <div className={`p-6 rounded-xl border transition-colors duration-500 ${
            isDark 
              ? 'bg-[hsl(220,18%,10%)] border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <p className={`font-body text-sm ${
                isDark ? 'text-gray-muted' : 'text-gray-600'
              }`}>Total Returns</p>
            </div>
            <p className={`font-body text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>+$48,250</p>
          </div>

          <div className={`p-6 rounded-xl border transition-colors duration-500 ${
            isDark 
              ? 'bg-[hsl(220,18%,10%)] border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <p className={`font-body text-sm ${
                isDark ? 'text-gray-muted' : 'text-gray-600'
              }`}>Active Investments</p>
            </div>
            <p className={`font-body text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>4</p>
          </div>
        </div>

        {/* Portfolio Table */}
        <div className={`rounded-xl border overflow-hidden transition-colors duration-500 ${
          isDark 
            ? 'bg-[hsl(220,18%,10%)] border-white/10' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="p-6 border-b transition-colors duration-500 ${
            isDark ? 'border-white/10' : 'border-gray-200'
          }">
            <h2 className={`font-body text-xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Your Portfolio</h2>
          </div>
          <div className="divide-y transition-colors duration-500 ${
            isDark ? 'divide-white/10' : 'divide-gray-200'
          }">
            {portfolioItems.map((item) => (
              <div key={item.name} className="p-6 flex items-center justify-between">
                <div>
                  <p className={`font-body font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{item.name}</p>
                </div>
                <div className="text-right">
                  <p className={`font-body font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{item.value}</p>
                  <p className={`font-body text-sm ${
                    item.positive ? 'text-green-500' : 'text-red-500'
                  }`}>{item.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const Dashboard = () => {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
};

export default Dashboard;
