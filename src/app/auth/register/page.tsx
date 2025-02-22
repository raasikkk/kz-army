import Navbar from "@/components/Navbar"
import Link from "next/link"

const Register = () => {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center bg-[#F4F4F4] w-full h-screen">
          <div className="w-full mx-10 md:w-1/3 p-12 bg-white rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-xl">Регистрация</h3>
              <p className="text-[#7D7D7D]">Напишите ваш логин, e-mail и пароль</p>
              <form action="#" className="mt-6">
                <input 
                    type="text" 
                    className="w-full rounded-xl bg-[#F7F7F7] text-[#858585] p-3 pl-10 "
                    placeholder="Логин"
                    style={{
                        backgroundImage: "url('/icons/user.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px center", 
                        backgroundSize: "20px 20px", 
                    }}
                />
                <input 
                    type="text" 
                    className="w-full rounded-xl mt-3 bg-[#F7F7F7] text-[#858585] p-3 pl-10 "
                    placeholder="e-mail"
                    style={{
                        backgroundImage: "url('/icons/mail-send.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px center", 
                        backgroundSize: "20px 20px", 
                    }}
                />
                <input 
                    type="password" 
                    className="w-full rounded-xl mt-3 bg-[#F7F7F7] text-[#858585] p-3 "
                    placeholder="Пароль"
                />

                <button className="w-full rounded-xl mt-6 p-3 font-medium bg-custom-yellow text-black">
                    Войти
                </button>
                    
              </form>
              <p className="mt-3 text-sm font-normal">Уже есть аккаунт? <span className="text-[#0084FF]"><Link href={`/auth/login`}>Войти</Link></span></p>
          </div>
      </div>
      </>
    )
  }
  
  export default Register