"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 1606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Cart = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    children: "Cart"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ 3489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "footer-container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: "2022 i-Shop headphones all rights reserved"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "icons",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillInstagram, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineTwitter, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    midText,
    smallText,
    product,
    buttonText,
    image,
    desc
  }
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "footer-banner-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "banner-desc",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "left",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: discount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          children: largeText1
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          children: largeText2
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: saleTime
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "right",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: smallText
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          children: midText
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: desc
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/product/${product}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            type: "button",
            children: buttonText
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image),
        className: "footer-banner-image"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBanner);

/***/ }),

/***/ 1523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "hero-banner-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: "beats-solo",
        children: heroBanner.smallText
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
        children: heroBanner.midText
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        children: heroBanner.largeText1
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(heroBanner.image),
        alt: "headphones",
        className: "hero-banner-image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/product/${heroBanner.product}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            type: "button",
            children: heroBanner.buttonText
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "desc",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
            children: "Description"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            children: heroBanner.desc
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBanner);

/***/ }),

/***/ 193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1053);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3489);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "layout",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("title", {
        children: "i-store"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("header", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("main", {
      className: "main-container",
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("footer", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1938);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5547);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_3__, _context_StateContext__WEBPACK_IMPORTED_MODULE_4__]);
([___WEBPACK_IMPORTED_MODULE_3__, _context_StateContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__/* .useStateContext */ .F)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "navbar-container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
      className: "logo",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: "i-Shop Headphones"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      type: "button",
      className: "cart-icon",
      onClick: () => setShowCart(true),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShopping, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: "cart-item-qty",
        children: totalQuantities
      })]
    }), showCart && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .Cart */ .AP, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Product = ({
  product: {
    image,
    name,
    slug,
    price
  }
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/product/${slug.current}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "product-card",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image && image[0]),
        width: 250,
        height: 250,
        className: "product-image"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: "product-name",
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        className: "product-name",
        children: ["$", price]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ 1938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AP": () => (/* reexport safe */ _Cart__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Ar": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "LE": () => (/* reexport safe */ _FooterBanner__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "xs": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "yo": () => (/* reexport safe */ _HeroBanner__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3489);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1606);
/* harmony import */ var _FooterBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7671);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1523);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1053);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3693);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_3__, _Navbar__WEBPACK_IMPORTED_MODULE_5__]);
([_Layout__WEBPACK_IMPORTED_MODULE_3__, _Navbar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useStateContext),
/* harmony export */   "s": () => (/* binding */ StateContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const StateContext = ({
  children
}) => {
  const {
    0: showCart,
    1: setShowCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cartItems,
    1: setCatrItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: totalPrice,
    1: setTotalPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: totalQuantities,
    1: setTotalQuantities
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: qty,
    1: setQty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id);
    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updateCardItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return _objectSpread(_objectSpread({}, cartProduct), {}, {
          quantity: cartProduct.quantity + quantity
        });
      });
      setCatrItems(updateCardItems);
    } else {
      product.quantity = quantity;
      setCatrItems([...cartItems, _objectSpread({}, product)]);
    }

    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const incQty = () => {
    setQty(prevQty => prevQty + 1);
  };

  const decQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Context.Provider, {
    value: {
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      onAdd
    },
    children: children
  });
};
const useStateContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'c18qvltn',
  dataset: 'production',
  apiVersion: '2022-08-24',
  useCdn: 'true',
  token: ""
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ })

};
;