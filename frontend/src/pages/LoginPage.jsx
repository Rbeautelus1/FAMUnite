const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  {/*Design of Login Page*/}
  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/*Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/*Logo*/}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary-transition-colors"
                >
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
                <p className="text-base-ontent/60">Sign in to our account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
};
  export default LoginPage;
