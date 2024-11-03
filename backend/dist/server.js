"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var path = require("path");
var _require = require("mongodb"),
  MongoClient = _require.MongoClient,
  ObjectId = _require.ObjectId;
require("regenerator-runtime/runtime");
var app = express();
app.use(express.json()); // Parse JSON bodies

var cors = require('cors');
app.use(cors());

// MongoDB connection URI
var uri = "mongodb+srv://ltshikila17:Uy94UZuXiw1lrIKU@cluster0.nmrzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var client = new MongoClient(uri);

// MONGO DB CONNECTION FUNCTION
function connectDB() {
  return _connectDB.apply(this, arguments);
} // Middleware to connect to the database
function _connectDB() {
  _connectDB = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    var db;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return client.connect();
        case 3:
          db = client.db("muse");
          return _context23.abrupt("return", {
            users: db.collection("users"),
            songs: db.collection("songs"),
            playlists: db.collection("playlists")
          });
        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
          return _context23.abrupt("return", null);
        case 11:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 7]]);
  }));
  return _connectDB.apply(this, arguments);
}
app.use(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var collections;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return connectDB();
        case 2:
          collections = _context.sent;
          if (collections) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            error: "Failed to connect to the database"
          }));
        case 5:
          req.db = collections;
          next();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

// Helper function for fuzzy search
function buildFuzzyQuery(field, query) {
  return _defineProperty({}, field, {
    $regex: query,
    $options: "i"
  });
}

// Authentication Routes (Signup, Login, Logout)

// Sign up %
app.post("/api/auth/signup", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, username, password, email, existingUser, newUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email;
          if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            error: "Invalid email format"
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return req.db.users.findOne({
            username: username
          });
        case 6:
          existingUser = _context2.sent;
          if (!existingUser) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            error: "Username already exists"
          }));
        case 9:
          newUser = {
            name: "",
            surname: "",
            username: username,
            password: password,
            email: email,
            pfp_image: "",
            bio: "",
            socialmedia: [],
            friends: [],
            owned_playlists: [],
            saved_playlists: [],
            logged_in: true
          };
          _context2.next = 12;
          return req.db.users.insertOne(newUser);
        case 12:
          res.json({
            message: "User created successfully"
          });
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](3);
          res.status(500).json({
            error: "Error signing up"
          });
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 15]]);
  }));
  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());

// Log in %
app.post("/api/auth/login", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body2, username, password, user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
          _context3.prev = 1;
          _context3.next = 4;
          return req.db.users.findOne({
            username: username,
            password: password
          });
        case 4:
          user = _context3.sent;
          if (user) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(401).json({
            error: "Invalid credentials"
          }));
        case 7:
          _context3.next = 9;
          return req.db.users.updateOne({
            username: username
          }, {
            $set: {
              logged_in: true
            }
          });
        case 9:
          // Store the username in localStorage
          res.json({
            message: "Login successful",
            user: user
          });
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            error: "Error logging in"
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}());

// Log out %
app.post("/api/auth/logout", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var username;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          username = req.body.username;
          _context4.prev = 1;
          _context4.next = 4;
          return req.db.users.updateOne({
            username: username
          }, {
            $set: {
              logged_in: false
            }
          });
        case 4:
          res.json({
            message: "Logout successful"
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            error: "Error logging out"
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}());

// Profile Management Routes

// View your profile %
app.get("/api/users/profile", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var username, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          username = req.query.username;
          _context5.prev = 1;
          _context5.next = 4;
          return req.db.users.findOne({
            username: username
          });
        case 4:
          user = _context5.sent;
          if (user) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            error: "User not found"
          }));
        case 7:
          res.json(user);
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            error: "Error fetching profile"
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}());

// Edit your profile 
app.put("/api/users/profile", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, username, name, surname, email, bio, pfp_image, updatedData;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, username = _req$body3.username, name = _req$body3.name, surname = _req$body3.surname, email = _req$body3.email, bio = _req$body3.bio, pfp_image = _req$body3.pfp_image;
          _context6.prev = 1;
          updatedData = {
            name: name,
            surname: surname,
            email: email,
            bio: bio,
            pfp_image: pfp_image
          };
          _context6.next = 5;
          return req.db.users.updateOne({
            username: username
          }, {
            $set: updatedData
          });
        case 5:
          res.json({
            message: "Profile updated successfully"
          });
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          res.status(500).json({
            error: "Error updating profile"
          });
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}());

//Delete Your Profile
app["delete"]("/api/users/:username", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var username;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          username = req.params.username;
          _context7.prev = 1;
          _context7.next = 4;
          return req.db.users.deleteOne({
            username: username
          });
        case 4:
          res.json({
            message: "Profile deleted successfully"
          });
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](1);
          res.status(500).json({
            error: "Error deleting profile"
          });
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 7]]);
  }));
  return function (_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}());

// View other users' profiles %
app.get("/api/users/:username", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var username, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          username = req.params.username;
          _context8.prev = 1;
          _context8.next = 4;
          return req.db.users.findOne({
            username: username
          });
        case 4:
          user = _context8.sent;
          if (user) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            error: "User not found"
          }));
        case 7:
          res.json(user);
          _context8.next = 13;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          res.status(500).json({
            error: "Error fetching user profile"
          });
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 10]]);
  }));
  return function (_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}());

// Friend / Unfriend other users %
app.post("/api/users/friend", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body4, username, friendUsername;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$body4 = req.body, username = _req$body4.username, friendUsername = _req$body4.friendUsername;
          _context9.prev = 1;
          _context9.next = 4;
          return req.db.users.updateOne({
            username: username
          }, {
            $push: {
              friends: {
                user: friendUsername,
                accepted: true
              }
            }
          });
        case 4:
          res.json({
            message: "Friend added"
          });
          _context9.next = 10;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](1);
          res.status(500).json({
            error: "Error adding friend"
          });
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 7]]);
  }));
  return function (_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}());
app["delete"]("/api/users/unfriend", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body5, username, friendUsername;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$body5 = req.body, username = _req$body5.username, friendUsername = _req$body5.friendUsername;
          _context10.prev = 1;
          _context10.next = 4;
          return req.db.users.updateOne({
            username: username
          }, {
            $pull: {
              friends: {
                user: friendUsername
              }
            }
          });
        case 4:
          res.json({
            message: "Friend removed"
          });
          _context10.next = 10;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](1);
          res.status(500).json({
            error: "Error removing friend"
          });
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 7]]);
  }));
  return function (_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}());

// Playlist and Song Management

// View songs feed %
app.get("/api/songs", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return req.db.songs.find({}).toArray();
        case 3:
          songs = _context11.sent;
          res.json(songs);
          _context11.next = 10;
          break;
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json({
            error: "Error fetching songs"
          });
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function (_x22, _x23) {
    return _ref12.apply(this, arguments);
  };
}());

// View playlists feed %
app.get("/api/playlists", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return req.db.playlists.find({}).toArray();
        case 3:
          playlists = _context12.sent;
          res.json(playlists);
          _context12.next = 10;
          break;
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            error: "Error fetching playlists"
          });
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function (_x24, _x25) {
    return _ref13.apply(this, arguments);
  };
}());

// Add song to the Songs collection %
app.post("/api/songs", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body6, name, artist, album, year, length, uploaded_by, coverart, result;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _req$body6 = req.body, name = _req$body6.name, artist = _req$body6.artist, album = _req$body6.album, year = _req$body6.year, length = _req$body6.length, uploaded_by = _req$body6.uploaded_by, coverart = _req$body6.coverart;
          _context13.prev = 1;
          _context13.next = 4;
          return req.db.songs.insertOne({
            name: name,
            artist: artist,
            album: album,
            year: year,
            length: length,
            uploaded_by: uploaded_by,
            coverart: coverart,
            upload_date: new Date()
          });
        case 4:
          result = _context13.sent;
          res.json({
            _id: result.insertedId,
            message: "Song added successfully"
          });
          _context13.next = 11;
          break;
        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](1);
          res.status(500).json({
            error: "Error adding song"
          });
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 8]]);
  }));
  return function (_x26, _x27) {
    return _ref14.apply(this, arguments);
  };
}());

// Create a playlist %
app.post("/api/playlists", /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body7, name, created_by, bio, tags, coverart, result, newPlaylistId;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _req$body7 = req.body, name = _req$body7.name, created_by = _req$body7.created_by, bio = _req$body7.bio, tags = _req$body7.tags, coverart = _req$body7.coverart;
          _context14.prev = 1;
          _context14.next = 4;
          return req.db.playlists.insertOne({
            name: name,
            created_by: created_by,
            bio: bio,
            tags: tags,
            coverart: coverart,
            songs: [],
            comments: []
          });
        case 4:
          result = _context14.sent;
          newPlaylistId = result.insertedId; // Retrieve the new playlist's ID
          // Update the user's owned_playlists and saved_playlists
          _context14.next = 8;
          return req.db.users.updateOne({
            username: created_by
          },
          // Find the user by username
          {
            $push: {
              owned_playlists: newPlaylistId,
              // Add the playlist ID to owned_playlists
              saved_playlists: newPlaylistId // Add the playlist ID to saved_playlists as well
            }
          });
        case 8:
          res.json({
            message: "Playlist created successfully",
            id: newPlaylistId
          });
          _context14.next = 14;
          break;
        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14["catch"](1);
          res.status(500).json({
            error: "(API) Error creating playlist"
          });
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 11]]);
  }));
  return function (_x28, _x29) {
    return _ref15.apply(this, arguments);
  };
}());

//View a Playlist
app.get("/api/playlists/:id", /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, playlist;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          _context15.prev = 1;
          _context15.next = 4;
          return req.db.playlists.findOne({
            _id: new ObjectId(id)
          });
        case 4:
          playlist = _context15.sent;
          if (playlist) {
            _context15.next = 7;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            error: "Playlist not found"
          }));
        case 7:
          res.json(playlist);
          _context15.next = 13;
          break;
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](1);
          res.status(500).json({
            error: "Error fetching playlist"
          });
        case 13:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[1, 10]]);
  }));
  return function (_x30, _x31) {
    return _ref16.apply(this, arguments);
  };
}());

// Add a song and also add it to the specified playlist
app.post("/api/playlists/:playlistId/songs", /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var playlistId, _req$body8, name, artist, album, year, length, uploaded_by, coverart, songResult, songId;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          playlistId = req.params.playlistId;
          _req$body8 = req.body, name = _req$body8.name, artist = _req$body8.artist, album = _req$body8.album, year = _req$body8.year, length = _req$body8.length, uploaded_by = _req$body8.uploaded_by, coverart = _req$body8.coverart;
          _context16.prev = 2;
          _context16.next = 5;
          return req.db.songs.insertOne({
            name: name,
            artist: artist,
            album: album,
            year: year,
            length: length,
            uploaded_by: uploaded_by,
            coverart: coverart,
            upload_date: new Date()
          });
        case 5:
          songResult = _context16.sent;
          songId = songResult.insertedId; // Get the new song ID
          // Now, add the song ID to the playlist's songs array
          _context16.next = 9;
          return req.db.playlists.updateOne({
            _id: new ObjectId(playlistId)
          }, {
            $push: {
              songs: songId
            }
          });
        case 9:
          res.json({
            message: "Song added successfully to both songs collection and playlist",
            songId: songId
          });
          _context16.next = 15;
          break;
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](2);
          res.status(500).json({
            error: "Error adding song to playlist"
          });
        case 15:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[2, 12]]);
  }));
  return function (_x32, _x33) {
    return _ref17.apply(this, arguments);
  };
}());

// get song details by song object ID
// get song details by song object ID
app.get('/api/songs/:id', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, song;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id; // Get the song ID from the request parameters
          _context17.prev = 1;
          if (ObjectId.isValid(id)) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(400).json({
            error: 'Invalid song ID'
          }));
        case 4:
          _context17.next = 6;
          return req.db.songs.findOne({
            _id: new ObjectId(id)
          });
        case 6:
          song = _context17.sent;
          if (song) {
            _context17.next = 9;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            error: 'Song not found'
          }));
        case 9:
          // Return the song data
          res.json(song);
          _context17.next = 16;
          break;
        case 12:
          _context17.prev = 12;
          _context17.t0 = _context17["catch"](1);
          console.error(_context17.t0);
          res.status(500).json({
            error: 'Error fetching song data'
          });
        case 16:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 12]]);
  }));
  return function (_x34, _x35) {
    return _ref18.apply(this, arguments);
  };
}());

// Delete a song
app["delete"]("/api/songs/:songId", /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var songId;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          songId = req.params.songId;
          _context18.prev = 1;
          _context18.next = 4;
          return req.db.songs.deleteOne({
            _id: ObjectId(songId)
          });
        case 4:
          res.json({
            message: "Song deleted successfully"
          });
          _context18.next = 10;
          break;
        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](1);
          res.status(500).json({
            error: "Error deleting song"
          });
        case 10:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 7]]);
  }));
  return function (_x36, _x37) {
    return _ref19.apply(this, arguments);
  };
}());

// Delete a playlist
app["delete"]("/api/playlists/:playlistId", /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var playlistId;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          playlistId = req.params.playlistId;
          _context19.prev = 1;
          _context19.next = 4;
          return req.db.playlists.deleteOne({
            _id: ObjectId(playlistId)
          });
        case 4:
          res.json({
            message: "Playlist deleted successfully"
          });
          _context19.next = 10;
          break;
        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](1);
          res.status(500).json({
            error: "Error deleting playlist"
          });
        case 10:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 7]]);
  }));
  return function (_x38, _x39) {
    return _ref20.apply(this, arguments);
  };
}());

// Search Routes

// Search for playlists (by name or tags)
app.get("/api/playlists/search", /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var query, playlists;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          query = req.query.query;
          _context20.prev = 1;
          _context20.next = 4;
          return req.db.playlists.find({
            $or: [buildFuzzyQuery("name", query), buildFuzzyQuery("tags", query)]
          }).toArray();
        case 4:
          playlists = _context20.sent;
          res.json(playlists);
          _context20.next = 11;
          break;
        case 8:
          _context20.prev = 8;
          _context20.t0 = _context20["catch"](1);
          res.status(500).json({
            error: "Error searching playlists"
          });
        case 11:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 8]]);
  }));
  return function (_x40, _x41) {
    return _ref21.apply(this, arguments);
  };
}());

// Search for songs (by name)
app.get("/api/songs/search", /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var query, songs;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          query = req.query.query;
          _context21.prev = 1;
          _context21.next = 4;
          return req.db.songs.find(buildFuzzyQuery("name", query)).toArray();
        case 4:
          songs = _context21.sent;
          res.json(songs);
          _context21.next = 11;
          break;
        case 8:
          _context21.prev = 8;
          _context21.t0 = _context21["catch"](1);
          res.status(500).json({
            error: "Error searching songs"
          });
        case 11:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[1, 8]]);
  }));
  return function (_x42, _x43) {
    return _ref22.apply(this, arguments);
  };
}());

// Search for users (by username)
app.get("/api/users/search", /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var query, users;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          query = req.query.query;
          _context22.prev = 1;
          _context22.next = 4;
          return req.db.users.find(buildFuzzyQuery("username", query)).toArray();
        case 4:
          users = _context22.sent;
          res.json(users);
          _context22.next = 11;
          break;
        case 8:
          _context22.prev = 8;
          _context22.t0 = _context22["catch"](1);
          res.status(500).json({
            error: "Error searching users"
          });
        case 11:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[1, 8]]);
  }));
  return function (_x44, _x45) {
    return _ref23.apply(this, arguments);
  };
}());

// SERVE STATIC FILES
app.use(express["static"](path.join(__dirname, "../../frontend/public")));

// CATCH-ALL ROUTE FOR CLIENT-SIDE ROUTING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/public/index.html"));
});

// Server Setup
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on port http://localhost:".concat(PORT));
});