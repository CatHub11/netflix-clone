import Input from "@/components/Input";

const Auth = () => {
  return(
    <div className="relative h-full w-full backdrop:bg-no-repeat bg-center bg-fixed bg-covered">
      <div className="bg-black w-full h-full  lg:bg-opacity-50">
        <nav className="px-12 py-5">
            
          <img src="/images/logo.png" className="h-[100px] block" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">

          </div>
        </div>
      </div>
    </div>
  );
}
  

export default Auth;