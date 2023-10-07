import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

// 1. 전체상품 페이지, 로그인 페이지, 상품디테일 페이지
// 2. 네비게이션 바 생성(컴포넌트로)
// 3. 전체상품 페이지에서는 전체 상품을 볼 수 있다.
// 4. 로그인 되었을 때 상품디테일 페이지를 볼 수 있다.
// 5. 로그인 되면 로그아웃버튼으로 바뀌고 로그아웃 버튼으 누르면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고 로그인 버튼으로 바뀐다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인됨, false면 로그인 안됨
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
