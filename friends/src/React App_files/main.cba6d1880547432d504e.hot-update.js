webpackHotUpdate("main",{

/***/ "./src/components/FriendsList.js":
/*!***************************************!*\
  !*** ./src/components/FriendsList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FriendsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axiosWithAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/axiosWithAuth */ "./src/utils/axiosWithAuth.js");
/* harmony import */ var _FriendCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FriendCard */ "./src/components/FriendCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _AddFriendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddFriendForm */ "./src/components/AddFriendForm.js");
var _jsxFileName = "/Users/jasonduncan/Lambda_Projects/Auth-Friends/friends/src/components/FriendsList.js";





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    paddingTop: '10%'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    width: '30%',
    background: 'white',
    borderRadius: '20px',
    transform: 'translateY(150%)',
    margin: '0 auto'
  }
});
function FriendsList({
  dialogOpen,
  setDialogOpen,
  loading,
  setLoading
}) {
  const [friends, setFriends] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoading(true);
    Object(_utils_axiosWithAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().get('friends').then(res => {
      setFriends(res.data);
      setLoading(false);
    }).catch(err => {
      console.error(err.message);
      localStorage.removeItem('authToken');
      alert(`Something Went Wrong! Please Try Again!`);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      className: classes.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      size: 60,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h3",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }
    }, "Loading..."));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2,
    justify: "space-evenly",
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }
  }, friends && friends.map(friend => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      key: friend.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FriendCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      friend: friend,
      setFriends: setFriends,
      setLoading: setLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddFriendForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setFriends: setFriends,
    dialogOpen: dialogOpen,
    setDialogOpen: setDialogOpen,
    setLoading: setLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }
  }));
}

/***/ })

})
//# sourceMappingURL=main.cba6d1880547432d504e.hot-update.js.map