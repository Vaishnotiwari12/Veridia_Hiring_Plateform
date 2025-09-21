import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import AppRoutes from '@/routes/AppRoutes';


function App() {
  return (
    <>
      <SignedOut>
        <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white p-4">
          <div className="max-w-md w-full bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700">
            <div className="text-center mb-8">
              <div className="h-16 w-16 mx-auto mb-4 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-16 w-16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3.5 3 10l4 6.5h10L21 10 17 3.5H7z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-2">Welcome to Veridia</h1>
              <p className="text-slate-300">Sign in to access your dashboard</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                <SignInButton mode="modal" />
              </div>

              <div className="text-sm text-slate-400">
                New to Veridia? Your account will be created automatically.
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        {/* Use the new centralized routes with role-based logic */}
        <AppRoutes />
      </SignedIn>
    </>
  );
}

export default App; 