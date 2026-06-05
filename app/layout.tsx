import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Bell, Search, HelpCircle } from "lucide-react";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERP Ozon & WB - 专业版",
  description: "进销存财务一体化管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-gray-50`}>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
              {/* Global Header */}
              <header className="h-16 bg-white border-b sticky top-0 z-10 px-8 flex items-center justify-between shadow-sm">
                <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg w-96 group focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="搜索订单、SKU、物流单号..." 
                    className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 placeholder:text-gray-400"
                  />
                </div>
                
                <div className="flex items-center space-x-6">
                  <button className="text-gray-400 hover:text-primary transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
                  </button>
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <HelpCircle className="w-5 h-5" />
                  </button>
                  <div className="h-6 w-[1px] bg-gray-200"></div>
                  <div className="flex items-center space-x-2 cursor-pointer group">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">简体中文</span>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 p-8">
                <div className="max-w-[1600px] mx-auto">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
