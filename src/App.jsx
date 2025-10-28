import { Routes, Route } from "react-router";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

//1.전체상품페이지, 로그인, 상품상세페이지
//1-1 네비게이션바를 만든다
//2. 전체 상품페이에서는 전체 상품을 볼수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 안온다
//4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다.
//5.로그아웃 버튼을 클리하면 로그아웃이 된다
//6.로그아웃되면 상품 디테일페이지를 볼수 없다. 다시 로그인 페이지가 보인다.
//7.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//8.상품을 검핵할수 있다.

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="login" element={<Login />} />
        <Route path="Product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
