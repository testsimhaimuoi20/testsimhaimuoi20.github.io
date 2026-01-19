// https://stc-zahub.zdn.vn/ZAChallengeClient/assets/js/main.chunk.js?version=770aba42
(this.webpackJsonp = this.webpackJsonp || []).push([
    [1], {
        184: function(e, t) {},
        255: function(e, t) {},
        521: function(e, t, n) {},
        522: function(e, t, n) {},
        525: function(e, t) {},
        526: function(e, t) {},
        527: function(e, t) {},
        528: function(e, t) {},
        529: function(e, t) {},
        542: function(e, t, n) {},
        545: function(e, t, n) {},
        546: function(e, t, n) {},
        558: function(e, t) {},
        561: function(e, t, n) {},
        562: function(e, t, n) {},
        563: function(e, t, n) {},
        564: function(e, t, n) {},
        565: function(e, t, n) {},
        571: function(e, t, n) {},
        572: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                c = n(17),
                u = n.n(c),
                l = n(15),
                i = n(26),
                s = n(8),
                o = {
                    path: "/",
                    COUNTDOWN: "/count-down",
                    REGULATION: "/regulation",
                    VIDEO: "/video",
                    MULTIPLE_CHOICES: "/multiple-choices",
                    RELAX: "/relax",
                    ESSAY: "/essay",
                    EXIT: "/exit"
                },
                m = {
                    path: "/layout",
                    DESKS: "/layout/desks"
                },
                p = {
                    path: "/examine",
                    ESSAYS: "/examine/essays",
                    DETAIL: "/examine/essays/:id"
                },
                f = {
                    path: "/monitor",
                    TEST_RESULT: {
                        path: "/monitor/test/result/:id"
                    }
                },
                d = "/idle",
                E = "/login-error",
                b = "/confirm",
                v = n(4),
                h = n.n(v),
                g = n(5),
                y = n.n(g),
                O = n(2),
                x = n.n(O),
                S = n.p + "assets/images/cover_full_zac_9.jpg",
                w = n.p + "assets/images/cover_small_zac_9.jpg",
                N = n(27),
                k = n.n(N);

            function C() {
                var e = null,
                    t = null;
                return "undefined" !== typeof document.hidden ? (e = "hidden", t = "visibilitychange") : "undefined" !== typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), {
                    hidden: e,
                    visibilityChange: t
                }
            }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = C(),
                    r = n.visibilityChange,
                    c = n.hidden,
                    u = function() {
                        e(!document[c])
                    };
                Object(a.useEffect)((function() {
                    return document.addEventListener(r, u),
                        function() {
                            document.removeEventListener(r, u)
                        }
                }), k()(t))
            }

            function T() {
                var e = Object(a.useRef)(),
                    t = Object(a.useRef)(!0),
                    n = Object(a.useRef)(null),
                    r = Object(a.useState)(0),
                    c = y()(r, 2),
                    u = c[0],
                    l = c[1],
                    i = Object(a.useState)({}),
                    s = y()(i, 2),
                    o = s[0],
                    m = s[1];

                function p() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = a.runCb,
                        c = void 0 !== r && r;
                    e.current && (c || (t.current = !1), n.current = null, l(0), m({}), clearInterval(e.current))
                }
                return Object(a.useEffect)((function() {
                    return function() {
                        return p()
                    }
                }), []), j((function(e) {
                    if (e && o.idealEndTime) {
                        var t = o.idealEndTime - (new Date).getTime();
                        n.current = t > 0 ? Math.floor(t / 1e3) : 0, l(n.current)
                    }
                }), [o.idealEndTime]), {
                    timerRef: e,
                    timeVal: u,
                    setTimeVal: l,
                    startTimer: function(a, r) {
                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            u = c.endingAnchor,
                            i = void 0 === u ? 0 : u;

                        function s() {
                            l(--n.current), n.current <= i && (p({
                                runCb: !0
                            }), t.current && r && r())
                        }
                        p(), n.current = a, t.current = !0, l(a), m({
                            endingAnchor: i,
                            timeout: a,
                            idealEndTime: (new Date).getTime() + 1e3 * a
                        }), e.current = setInterval(s, 1e3)
                    },
                    stopTimer: p
                }
            }
            var I = n(13),
                A = n.n(I),
                D = {
                    Operation: {
                        REGISTER: 0,
                        ZAC_REGISTER: 1,
                        SEND_MESSAGE: 2,
                        SEND_MESSAGE_BY_RECIPIENT_ID: 3,
                        SEND_MESSAGE_BY_OPERATION: 4,
                        SEND_MESSAGE_BY_TOKEN: 5,
                        PING: 6
                    },
                    MessageType: {
                        REGISTER_OK: 0,
                        ZAC_BONUS_TIME: 3,
                        ZAC_PAUSE_TIME: 4,
                        ZAC_LAYOUT_STATUS: 5,
                        ZAC_GET_DESK_LAYOUT_STATUS: 6,
                        PONG: 7,
                        FORCE_RELOAD: 8
                    }
                },
                P = {
                    INIT: 1,
                    MULTIPLE_CHOICES: 2,
                    IDLE: 3,
                    ESSAY: 4,
                    DONE: 5
                },
                R = {
                    initCount: "Initialized",
                    multipleChoicesCount: "In Multiple Choices",
                    idleCount: "In Idling",
                    essayCount: "In Essay",
                    doneCount: "Done"
                },
                L = {
                    INIT: 1,
                    IN_PROGRESS: 2,
                    DONE: 3,
                    TIME_UP: 4
                },
                M = 75,
                F = {
                    UserID: 1,
                    Status: {
                        NOT_LOGGED_IN: 0,
                        READY: 1,
                        DOING: 2,
                        OUT_FOCUS: 3,
                        DONE: 4,
                        QUANTITATIVE: 5,
                        VERBAL: 6,
                        INTEGRATED: 7,
                        WRITING: 8
                    }
                },
                U = {
                    INIT: 1,
                    SCORED: 2,
                    WAIT_FOR_DH_SCORE: 3,
                    DH_SCORED: 4,
                    WAIT_FOR_CALIBRATE: 5,
                    CALIBRATED: 6
                },
                q = {
                    ASC: 1,
                    DESC: 2
                },
                B = {
                    A_ANSWER: 1,
                    B_ANSWER: 2,
                    C_ANSWER: 3,
                    D_ANSWER: 4,
                    E_ANSWER: 5,
                    F_ANSWER: 6,
                    G_ANSWER: 7,
                    YES_ANSWER: 8,
                    NO_ANSWER: 9,
                    CORRECT_ANSWER: 10
                },
                H = {
                    MULTIPLE_CHOICE_2: 8,
                    MULTIPLE_CHOICE_3: 9,
                    MULTIPLE_CHOICE_4: 1,
                    MULTIPLE_CHOICE_5: 2,
                    MULTIPLE_CHOICE_6: 3,
                    SHORT_ANSWER: 4,
                    YES_NO: 5,
                    TABLE: 6,
                    MANY_IN_ONE: 11
                },
                W = A()(A()(A()(A()({}, L.INIT, "Init"), L.IN_PROGRESS, "In progress"), L.DONE, "Done"), L.TIME_UP, "Time up"),
                Y = A()(A()(A()(A()({}, L.INIT, "gray"), L.IN_PROGRESS, "primary"), L.DONE, "success"), L.TIME_UP, "danger"),
                z = "SET_USER",
                G = "SET_SESSION",
                Z = "SET_VIDEO_SRC",
                K = "SET_LOADING",
                V = "SET_LAYOUT_STATUS",
                J = "SET_SUBMISSION",
                Q = "SET_SUBMISSION_ID",
                X = "SET_MULTIPLE_CHOICE_ID",
                $ = "SET_MULTIPLE_CHOICE_IDS",
                ee = "SET_ESSAY_ID",
                te = "PRELOAD_MULTIPLE_CHOICES",
                ne = "SET_QUESTION",
                ae = "LOAD_CHOICES",
                re = "SET_CHOICE",
                ce = "TOGGLE_MARK",
                ue = "LOAD_MARKS",
                le = "SET_STATE_QUESTION",
                ie = "SET_TIME_OUT_TEST",
                se = "CLEAR_MULTIPLE_CHOICE_TEST",
                oe = "CLEAR_ESSAY_TEST",
                me = "SET_RELAX_TIME",
                pe = "SET_BONUS_TIME",
                fe = "SET_SECTION",
                de = "SET_EXAMINER_ID",
                Ee = "SET_IS_CALIBRATOR",
                be = "SET_CALIBRATED_ESSAYS",
                ve = "CALIBRATE",
                he = "SET_FILTER_CONFIG",
                ge = "MULTIPLE_CHOICES",
                ye = function(e) {
                    return {
                        type: z,
                        payload: e
                    }
                },
                Oe = function(e) {
                    return {
                        type: K,
                        payload: e
                    }
                },
                xe = function(e) {
                    return {
                        type: ne,
                        payload: e
                    }
                },
                Se = function(e) {
                    return {
                        type: J,
                        payload: {
                            submission: e
                        }
                    }
                },
                we = function(e) {
                    return {
                        type: Q,
                        payload: {
                            submissionId: e
                        }
                    }
                },
                Ne = function(e) {
                    return {
                        type: X,
                        payload: {
                            multipleChoiceId: e
                        }
                    }
                },
                ke = function(e) {
                    return {
                        type: $,
                        payload: {
                            multipleChoiceIds: e
                        }
                    }
                },
                Ce = function(e) {
                    return {
                        type: fe,
                        payload: {
                            section: e
                        }
                    }
                },
                je = function(e) {
                    return {
                        type: ee,
                        payload: {
                            essayId: e
                        }
                    }
                },
                _e = function(e) {
                    return {
                        type: le,
                        payload: e
                    }
                },
                Te = function(e) {
                    return {
                        type: ie,
                        payload: e
                    }
                },
                Ie = function(e) {
                    return {
                        type: de,
                        payload: e
                    }
                },
                Ae = function(e) {
                    return {
                        type: Ee,
                        payload: e
                    }
                },
                De = function(e) {
                    return {
                        type: be,
                        payload: e
                    }
                };

            function Pe() {
                var e = Object(s.b)();

                function t(t) {
                    e(Oe(t))
                }

                function n() {
                    return (n = h()(x.a.mark((function e(n) {
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t(!0), !n) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.next = 1, n();
                                case 1:
                                    t(!1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return function(e) {
                    return n.apply(this, arguments)
                }
            }
            var Re = Object(a.createContext)(),
                Le = function(e) {
                    var t = e.value,
                        n = e.children;
                    return r.a.createElement(Re.Provider, {
                        value: t
                    }, n)
                },
                Me = function() {
                    return Object(a.useContext)(Re)
                },
                Fe = Object(a.createContext)(),
                Ue = function(e) {
                    var t = e.value,
                        n = e.children;
                    return r.a.createElement(Fe.Provider, {
                        value: t
                    }, n)
                },
                qe = function() {
                    return Object(a.useContext)(Fe)
                },
                Be = n(92),
                He = n.n(Be),
                We = 1,
                Ye = 0,
                ze = -1,
                Ge = -2,
                Ze = -3,
                Ke = -4,
                Ve = -5,
                Je = -6,
                Qe = -7,
                Xe = "X-Client-Before-Auth-Url",
                $e = {
                    ZALO_LOGIN_WIDGET: "https://stc-sp.zadn.vn/session-sdk/session-sdk.min.js"
                },
                et = "https://res-zalo.zadn.vn/zdl/2025/ZAC11_countdown.mp4",
                tt = {
                    TEST: "on",
                    LAYOUT: "on",
                    MONITOR: "on",
                    EXAMINE: "on"
                },
                nt = 20;

            function at(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? at(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ct(e) {
                var t = e.data;
                switch (t.code) {
                    case ze:
                        return void(window.location = t.data.authUrl);
                    case Ze:
                        return void(window.location = "/denied");
                    case Ke:
                        return void(window.location = "/error");
                    case Je:
                        return void(window.location = "/login-error");
                    case Ge:
                        return void window.location.reload();
                    case Qe:
                        return void(window.location = "/no-active-session");
                    case Ve:
                        return void(window.location = "/not-granted");
                    default:
                        return e
                }
            }

            function ut() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return rt(rt({}, e), {}, {
                    headers: rt(rt({}, e.headers), {}, A()({}, Xe, window.location.href))
                })
            }

            function lt(e) {
                return it.apply(this, arguments)
            }

            function it() {
                return (it = h()(x.a.mark((function e(t) {
                    var n;
                    return x.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 1, He()(ut(t));
                            case 1:
                                return n = e.sent, e.abrupt("return", ct(n));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            lt.get = function() {
                var e = h()(x.a.mark((function e(t, n) {
                    var a;
                    return x.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 1, He.a.get(t, ut(n));
                            case 1:
                                return a = e.sent, e.abrupt("return", ct(a));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), lt.post = function() {
                var e = h()(x.a.mark((function e(t, n, a) {
                    var r;
                    return x.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 1, He.a.post(t, n, ut(a));
                            case 1:
                                return r = e.sent, e.abrupt("return", ct(r));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }();
            var st = {
                me: "/me",
                logout: "/logout",
                session: "/session",
                submission: "/zac_sm",
                multipleChoices: "/zac_sm/mc",
                za9_multipleChoices: "/zac_sm/zac9_mc",
                essay: "/zac_sm/essay",
                layout: "/zac_layout",
                examine: "/zac_examine",
                monitor: "/zac_monitor",
                pdfHighlighter: "/pdf_highlighter",
                export: "/export",
                external: "/external"
            };

            function ot(e, t) {
                var n = "".concat("/api").concat(st[e]);
                return t ? "".concat(n, "?option=").concat(t) : n
            }
            var mt = {
                    load: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post("/api/zac_sm?option=load");
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        return n = t.data, e.abrupt("return", n);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    nextStatus: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post("/api/zac_sm?option=next", {
                                            id: t
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    nextSection: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post("/api/zac_sm?option=next_section", {
                                            id: t
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    get: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get("/api/zac_sm?option=get", {
                                            params: {
                                                id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getRelaxCountdown: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get("/api/zac_sm?option=get_relax_countdown", {
                                            params: {
                                                id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                pt = F;
            var ft = function() {
                    var e = Object(l.useHistory)(),
                        t = Me(),
                        n = qe(),
                        c = T(),
                        u = c.timeVal,
                        i = c.startTimer,
                        m = Object(s.c)((function(e) {
                            return e.test.submissionId
                        })),
                        p = Pe();
                    Object(a.useEffect)((function() {
                        n.reroute()
                    }), []), Object(a.useEffect)((function() {
                        n.isRouteValid && t.sendLayoutStatus(pt.Status.READY)
                    }), [n.isRouteValid]), Object(a.useEffect)((function() {
                        function e() {
                            return (e = h()(x.a.mark((function e() {
                                var t, n, a, r, c;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(m > 0)) {
                                                e.next = 2;
                                                break
                                            }
                                            return t = 0, n = 300, a = Date.now(), e.next = 1, mt.getRelaxCountdown(m);
                                        case 1:
                                            r = e.sent, c = Date.now(), r = r + Math.round((c - a) / 1e3) + 1, i(r = (r = r > n ? n : r) < t ? t : r, b);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [m]);
                    var f = Object(a.useMemo)((function() {
                            var e = Math.floor(u / 60);
                            return {
                                minutes: e,
                                seconds: Math.floor(u - 60 * e)
                            }
                        }), [u]),
                        d = f.minutes,
                        E = f.seconds;

                    function b() {
                        p(h()(x.a.mark((function t() {
                            return x.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 1, n.nextStatus({
                                            apiUpdate: !0
                                        });
                                    case 1:
                                        e.push(o.ESSAY);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))))
                    }
                    return r.a.createElement("div", {
                        className: "relax"
                    }, r.a.createElement("div", {
                        className: "page-content"
                    }, r.a.createElement("div", {
                        className: "img-countdown"
                    }, r.a.createElement("div", {
                        className: "bl bl-l"
                    }, r.a.createElement("img", {
                        className: "default",
                        src: S,
                        alt: "ZA Challenge"
                    }), r.a.createElement("img", {
                        className: "small",
                        src: w,
                        alt: "ZA Challenge"
                    }), r.a.createElement("div", {
                        className: "timer has-bg"
                    }, r.a.createElement("div", {
                        className: "bl-time hours"
                    }, r.a.createElement("em", null, String(0).padStart(2, "0")), r.a.createElement("span", null, "Hours")), r.a.createElement("div", {
                        className: "bl-time mins"
                    }, r.a.createElement("em", null, String(d).padStart(2, "0")), r.a.createElement("span", null, "Mins")), r.a.createElement("div", {
                        className: "bl-time secs"
                    }, r.a.createElement("em", null, String(E).padStart(2, "0")), r.a.createElement("span", null, "Secs")))))))
                },
                dt = n(23),
                Et = n.n(dt),
                bt = n.p + "assets/images/Document.png",
                vt = n.p + "assets/images/32-writing.png",
                ht = n.p + "assets/images/PDF_File.png",
                gt = (n.p, n.p, {
                    init: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("essay", "init"), {
                                            sm_id: t
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    load: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("essay", "load"), {
                                            es_id: t
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    export: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("essay", "export"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    downloadExported: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("essay", "download_exported"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    updateFile: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("essay", "file"), t, {
                                            headers: {
                                                "content-type": "multipart/form-data"
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getFile: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("essay", "get_file"), {
                                            params: {
                                                es_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        return a = n.data, e.abrupt("return", a);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getFileInfo: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("essay", "get_file_info"), {
                                            params: {
                                                es_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    submit: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("essay", "submit"), {
                                            id: n,
                                            sm_id: t
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }),
                yt = n(89),
                Ot = n.n(yt),
                xt = n(90),
                St = n.n(xt),
                wt = n(25),
                Nt = n.n(wt),
                kt = function() {
                    return St()((function e() {
                        Ot()(this, e)
                    }), null, [{
                        key: "setItem",
                        value: function(e, t, n) {
                            localStorage.setItem(e, JSON.stringify({
                                data: t,
                                expire: n
                            }))
                        }
                    }, {
                        key: "getItem",
                        value: function(e) {
                            var t = localStorage.getItem(e);
                            return !t || (t = JSON.parse(t)).expire && Nt()().isAfter(t.expire) ? null : t.data
                        }
                    }, {
                        key: "clearByPattern",
                        value: function(e) {
                            Object.keys(localStorage).forEach((function(t) {
                                new RegExp(e, "g").test(t) && localStorage.removeItem(t)
                            }))
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            localStorage.clear()
                        }
                    }])
                }(),
                Ct = n(20),
                jt = n.n(Ct);

            function _t(e, t) {
                return function(n) {
                    var a = "zachallenge-".concat(e),
                        r = kt.getItem(a) || {};
                    n(function(e) {
                        return {
                            type: ae,
                            payload: e
                        }
                    }({
                        choices: Object.assign(t, r)
                    }))
                }
            }

            function Tt(e, t) {
                var n = t.id,
                    a = t.option;
                return function(t) {
                    var r = "zachallenge-".concat(e),
                        c = kt.getItem(r) || {};
                    c[n] = a, kt.setItem(r, c), t({
                        type: re,
                        payload: {
                            id: n,
                            option: a
                        }
                    })
                }
            }

            function It(e, t) {
                var n = t.index;
                return function(t) {
                    var a = "zachallenge-marks-".concat(e),
                        r = kt.getItem(a) || {};
                    r[n] = !r[n], r[n] || delete r[n], kt.setItem(a, r), t({
                        type: ce,
                        payload: {
                            index: n
                        }
                    })
                }
            }

            function At(e) {
                return function(t) {
                    var n = "zachallenge-marks-".concat(e),
                        a = kt.getItem(n) || {};
                    Object(Ct.isEmpty)(a) || t(function(e) {
                        return {
                            type: ue,
                            payload: e
                        }
                    }({
                        marks: a
                    }))
                }
            }

            function Dt(e) {
                return function(e) {
                    e({
                        type: se,
                        payload: {}
                    })
                }
            }

            function Pt() {
                return function(e) {
                    e({
                        type: oe,
                        payload: {}
                    })
                }
            }
            var Rt = n(51),
                Lt = n.n(Rt),
                Mt = n(12),
                Ft = ["type", "message", "duration"];

            function Ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function qt(e) {
                var t = e.type,
                    n = e.message,
                    a = e.duration,
                    r = Lt()(e, Ft);
                return Object(Mt.Message)(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ut(Object(n), !0).forEach((function(t) {
                            A()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    customClass: "always-top text-gray-700",
                    showClose: !0,
                    type: t,
                    duration: a || 5e3,
                    message: n
                }, r))
            }
            var Bt = F;
            var Ht = function() {
                    var e = Me(),
                        t = qe(),
                        n = Object(s.b)(),
                        c = Object(l.useHistory)(),
                        u = Object(s.c)((function(e) {
                            return e.test.essayId
                        })),
                        i = Object(s.c)((function(e) {
                            return e.test.submissionId
                        })),
                        m = Pe(),
                        p = T(),
                        f = p.timeVal,
                        d = p.startTimer,
                        E = Object(a.useState)(0),
                        b = y()(E, 2)[1],
                        v = Object(a.useState)(null),
                        g = y()(v, 2),
                        O = g[0],
                        S = g[1],
                        w = Object(a.useState)([]),
                        N = y()(w, 2),
                        k = N[0],
                        C = N[1],
                        j = Object(a.useState)(!1),
                        _ = y()(j, 2),
                        I = _[0],
                        A = _[1],
                        D = Object(a.useState)({}),
                        P = y()(D, 2),
                        R = P[0],
                        L = P[1],
                        M = Object(a.useState)(!1),
                        F = y()(M, 2),
                        U = F[0],
                        q = F[1],
                        B = Object(a.useRef)(!0),
                        H = Object(a.useRef)();

                    function W() {
                        return (W = h()(x.a.mark((function e() {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        m(h()(x.a.mark((function e() {
                                            var t, n, a, r, c;
                                            return x.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return t = Date.now(), e.next = 1, gt.load(u);
                                                    case 1:
                                                        n = e.sent, a = Date.now(), n && (r = n.startTime + (a - t), c = n.elapsedTime - Math.round((a - t) / 1e3), b(r), S(c), C(n.threads || []), A(!0));
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function Y() {
                        return z.apply(this, arguments)
                    }

                    function z() {
                        return (z = h()(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, gt.getFileInfo(u);
                                    case 1:
                                        (t = e.sent) && (L(t), setTimeout(Z, 1e3));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function G() {
                        return (G = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t.target.files && t.target.files.length > 0)) {
                                            e.next = 6;
                                            break
                                        }
                                        return n = t.target.files[0], (a = new FormData).append("es_id", u), a.append("file", n), q(!0), e.prev = 1, e.next = 2, gt.updateFile(a);
                                    case 2:
                                        e.sent ? (B.current && Z(), Y()) : qt({
                                            type: "error",
                                            message: "Upload file has failed"
                                        }), e.next = 4;
                                        break;
                                    case 3:
                                        e.prev = 3, e.catch(1), qt({
                                            type: "error",
                                            message: "Upload file has failed"
                                        });
                                    case 4:
                                        return e.prev = 4, q(!1), e.finish(4);
                                    case 5:
                                        H.current.value = "";
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 3, 4, 5]
                            ])
                        })))).apply(this, arguments)
                    }

                    function Z() {
                        e.sendLayoutStatus(Bt.Status.DONE), B.current = !1
                    }

                    function K() {
                        return V.apply(this, arguments)
                    }

                    function V() {
                        return (V = h()(x.a.mark((function e() {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        m(h()(x.a.mark((function e() {
                                            var a;
                                            return x.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 1, gt.submit(i, u);
                                                    case 1:
                                                        if (a = e.sent, n(Pt()), !a) {
                                                            e.next = 3;
                                                            break
                                                        }
                                                        return e.next = 2, t.nextStatus({
                                                            apiUpdate: !0
                                                        });
                                                    case 2:
                                                        c.push(o.EXIT);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    Object(a.useEffect)((function() {
                        e.sendLayoutStatus(Bt.Status.WRITING), t.reroute()
                    }), []), Object(a.useEffect)((function() {
                        i > 0 && u > 0 && t.isRouteValid && function() {
                            W.apply(this, arguments)
                        }()
                    }), [i, u, t.isRouteValid]), Object(a.useEffect)((function() {
                        if (I && null !== O) {
                            var e = 3600 - O;
                            e > 3600 ? e = 3600 : e <= 0 && (e = 5), d(e, K)
                        }
                    }), [I, O]), Object(a.useEffect)((function() {
                        u > 0 && Y()
                    }), [u]);
                    var J = Object(a.useMemo)((function() {
                            var e = Math.floor(f / 60);
                            return {
                                minutes: e,
                                seconds: Math.floor(f - 60 * e)
                            }
                        }), [f]),
                        Q = J.minutes,
                        X = J.seconds;

                    function $(e) {}
                    return r.a.createElement("div", {
                        className: "essay"
                    }, r.a.createElement("div", {
                        className: "page-content is-essay"
                    }, r.a.createElement("div", {
                        className: "bl-sub-essay"
                    }, r.a.createElement("div", {
                        className: "essay-title d-flex"
                    }, r.a.createElement("img", {
                        src: vt,
                        alt: ""
                    }), "\xa0Writing"), r.a.createElement("hr", {
                        className: "my-4"
                    }), r.a.createElement("div", {
                        className: "timer-essay"
                    }, r.a.createElement("h4", null, "Th\u1eddi gian c\xf2n l\u1ea1i"), r.a.createElement("span", {
                        className: "time-left"
                    }, String(Q).padStart(2, "0"), ":", String(X).padStart(2, "0"))), r.a.createElement("div", {
                        className: "summary-essay"
                    }, r.a.createElement("h2", {
                        className: "title-essay"
                    }, "\u0110\u1ec1 b\xe0i t\u1ef1 lu\u1eadn"), k.map((function(e, t) {
                        return r.a.createElement("div", {
                            key: t
                        }, r.a.createElement("strong", null, e.title, ":"), " ", (n = e.thread, Et()(n)));
                        var n
                    })))), r.a.createElement("div", {
                        className: "bl-main-essay"
                    }, r.a.createElement("h2", {
                        className: "title-essay"
                    }, "G\u1eedi b\xe0i thi t\u1ef1 lu\u1eadn"), r.a.createElement("div", {
                        className: "upload-container m-auto "
                    }, r.a.createElement("input", {
                        ref: H,
                        className: "form-control-file",
                        type: "file",
                        id: "inputFile",
                        accept: ".pdf",
                        onChange: function(e) {
                            return G.apply(this, arguments)
                        },
                        onDrag: $,
                        onDrop: $
                    }), r.a.createElement("div", {
                        className: "context-upload"
                    }, r.a.createElement("img", {
                        className: "mx-auto mb-3",
                        src: bt,
                        alt: ""
                    }), r.a.createElement("h5", null, r.a.createElement("p", null, r.a.createElement("span", null, "K\xe9o th\u1ea3 file PDF (t\u1ed1i \u0111a 2MB)"), " \u0111\u1ec3 t\u1ea3i l\xean"), r.a.createElement("p", {
                        className: "or my-2"
                    }, "ho\u1eb7c"), r.a.createElement("button", {
                        className: "upload-btn"
                    }, "Ch\u1ecdn file t\u1eeb m\xe1y")))), r.a.createElement("div", {
                        className: "file-wrapper pt-4"
                    }, r.a.createElement("div", {
                        className: "is-file",
                        id: "id-file"
                    }, U && r.a.createElement("h3", null, "\u0110ang t\u1ea3i file l\xean..."), R.fileName && !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
                        className: "mb-2"
                    }, "File \u0111\xe3 t\u1ea3i l\xean:"), r.a.createElement("div", {
                        className: "file-card flex items-center\t"
                    }, r.a.createElement("img", {
                        src: ht,
                        alt: ""
                    }), r.a.createElement("a", {
                        title: R.fileName,
                        href: "#!",
                        onClick: function() {
                            window.open("/api/zac_sm/essay?option=get_file&es_id=" + u)
                        },
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, R.sysFileName || R.fileName || "N/A"))))))))
                },
                Wt = n.p + "assets/images/img_logo_zac_12.jpg";
            var Yt = function() {
                var e = qe();
                return Object(a.useEffect)((function() {
                    e.reroute()
                }), []), r.a.createElement("div", {
                    className: "timeout"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "timeout-wrap"
                }, r.a.createElement("div", {
                    className: "logo-za"
                }, r.a.createElement("div", {
                    className: "wrap"
                }, r.a.createElement("img", {
                    src: Wt,
                    alt: "ZA Challenge"
                }))), r.a.createElement("span", {
                    className: "headline m-bottom-10"
                }, "B\u1ea1n \u0111\xe3 h\u1ebft th\u1eddi gian l\xe0m b\xe0i"))))
            };

            function zt(e) {
                var t = e.loading,
                    n = void 0 !== t && t,
                    a = e.children,
                    c = e.onOk,
                    u = e.onOkText,
                    l = e.onShowOkButton,
                    i = void 0 === l || l;
                return r.a.createElement("div", {
                    className: "warning"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "modal show",
                    id: "alert"
                }, r.a.createElement("div", {
                    className: "modal-dialog",
                    role: "document"
                }, r.a.createElement("div", {
                    className: "modal-content"
                }, r.a.createElement("div", {
                    className: "modal-body box-shadow-light"
                }, r.a.createElement("div", {
                    className: "wrap is-warning"
                }, a, i ? r.a.createElement("div", {
                    className: "action"
                }, r.a.createElement("div", {
                    className: "start ".concat(n ? "disabled" : "", " button-loading-spinner"),
                    href: "#!",
                    onClick: function() {
                        "function" === typeof c && c()
                    }
                }, r.a.createElement("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    }
                }, n && r.a.createElement("svg", {
                    class: "circular",
                    style: {
                        marginRight: "4px"
                    },
                    viewBox: "25 25 50 50"
                }, r.a.createElement("circle", {
                    class: "path",
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none"
                })), u || "OK"))) : r.a.createElement("div", {
                    className: "action button-loading-spinner"
                }, r.a.createElement("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    }
                }, n && r.a.createElement("svg", {
                    class: "circular",
                    style: {
                        marginRight: "4px"
                    },
                    viewBox: "25 25 50 50"
                }, r.a.createElement("circle", {
                    class: "path",
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none"
                })))))))))))
            }
            var Gt = 27,
                Zt = 37,
                Kt = 38,
                Vt = 39,
                Jt = 40,
                Qt = 67,
                Xt = 73,
                $t = 74,
                en = 85,
                tn = 122,
                nn = 123,
                an = {
                    v10: {
                        init: function() {
                            var e = h()(x.a.mark((function e(t) {
                                var n, a;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.post("/api/zac/v10/multiple_choices?option=init", {
                                                sm_id: t
                                            });
                                        case 1:
                                            if (!(n = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((a = n.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", a.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        fetch: function() {
                            var e = h()(x.a.mark((function e(t) {
                                var n, a;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.get("/api/zac/v10/multiple_choices", {
                                                params: {
                                                    option: "fetch",
                                                    sm_id: t
                                                }
                                            });
                                        case 1:
                                            if (!(n = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((a = n.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", a.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        getQuestionsByIds: function() {
                            var e = h()(x.a.mark((function e(t, n) {
                                var a, r;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.post("/api/zac/v10/multiple_choices?option=get_question_by_ids&sm_id=".concat(n), {
                                                ids: t.join(",")
                                            });
                                        case 1:
                                            if (!(a = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((r = a.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", r.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        update: function() {
                            var e = h()(x.a.mark((function e(t, n, a) {
                                var r, c;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.post("/api/zac/v10/multiple_choices?option=update&sm_id=".concat(a), {
                                                id: t,
                                                content: n
                                            });
                                        case 1:
                                            if (!(r = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((c = r.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", c.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        updateDetail: function() {
                            var e = h()(x.a.mark((function e(t, n, a) {
                                var r, c;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.post("/api/zac/v10/multiple_choices?option=update_detail&sm_id=".concat(a), {
                                                id: t,
                                                detail: n
                                            });
                                        case 1:
                                            if (!(r = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((c = r.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", c.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        submit: function() {
                            var e = h()(x.a.mark((function e(t, n, a) {
                                var r, c;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.post("/api/zac/v10/multiple_choices?option=submit", {
                                                id: n,
                                                sm_id: t,
                                                content: a
                                            });
                                        case 1:
                                            if (!(r = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((c = r.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", c.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        getBonusTime: function() {
                            var e = h()(x.a.mark((function e(t) {
                                var n, a;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, lt.get("/api/zac/v10/multiple_choices?option=get_bonus_time", {
                                                params: {
                                                    sm_id: t
                                                }
                                            });
                                        case 1:
                                            if (!(n = e.sent)) {
                                                e.next = 2;
                                                break
                                            }
                                            if ((a = n.data).code !== We) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", a.data);
                                        case 2:
                                            return e.abrupt("return", null);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }
                },
                rn = n.p + "assets/images/Warning.png";

            function cn(e) {
                var t = e.msg,
                    n = e.onAccept,
                    a = e.onCancel,
                    c = e.step;
                return r.a.createElement("div", {
                    className: ""
                }, r.a.createElement("div", {
                    className: ""
                }, r.a.createElement("div", {
                    className: "modal show",
                    id: "alert"
                }, r.a.createElement("div", {
                    className: "modal-dialog",
                    role: "document"
                }, r.a.createElement("div", {
                    className: "modal-content"
                }, r.a.createElement("div", {
                    className: "modal-body box-shadow-light"
                }, r.a.createElement("div", {
                    className: "wrap is-warning"
                }, r.a.createElement("div", {
                    className: "warning-icon text-center"
                }, r.a.createElement("img", {
                    style: {
                        margin: "0 auto"
                    },
                    src: rn,
                    alt: ""
                }), r.a.createElement("h2", {
                    className: "font-bold mb-2 text-2xl"
                }, "L\u01b0u \xfd!")), r.a.createElement("p", {
                    className: "text-center"
                }, t), r.a.createElement("div", {
                    className: "action text-center"
                }, r.a.createElement("a", {
                    className: "cancel",
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                    onClick: a
                }, "Quay l\u1ea1i"), r.a.createElement("a", {
                    className: "start",
                    href: "#!",
                    onClick: n
                }, 1 === c ? "\u0110\u1ed3ng \xfd" : "N\u1ed9p b\xe0i")))))))))
            }
            var un = {
                1: "N\u1ed9p b\xe0i s\u1ebd kh\xf4ng quay l\u1ea1i \u0111\u01b0\u1ee3c b\xe0i l\xe0m c\u0169. B\u1ea1n c\xf3 \u0111\u1ed3ng \xfd kh\xf4ng?",
                2: "B\u1ea1n c\xf2n {0} ph\xfat . B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n n\u1ed9p b\xe0i ch\u1ee9?"
            };

            function ln(e) {
                var t = e.isStarting,
                    n = void 0 !== t && t,
                    c = e.elapsedTime,
                    u = e.bonusTime,
                    l = e.onTimeEnd,
                    i = e.sectionTime,
                    o = void 0 === i ? 2700 : i,
                    m = e.submitTest,
                    p = T(),
                    f = p.timeVal,
                    d = p.startTimer,
                    E = Object(a.useState)(!1),
                    b = y()(E, 2),
                    v = b[0],
                    h = b[1],
                    g = Object(a.useState)(1),
                    O = y()(g, 2),
                    x = O[0],
                    S = O[1],
                    w = Object(a.useState)(!1),
                    N = y()(w, 2),
                    k = N[0],
                    C = N[1],
                    j = Object(s.d)();
                Object(a.useEffect)((function() {
                    !0 === v && !0 === k && (h(!1), C(!1), S(1)), x > 2 && (S(1), h(!1), "function" === typeof m && m())
                }), [x, v, k]), Object(a.useEffect)((function() {
                    if (n && null !== c) {
                        var e = o + u / 1e3,
                            t = 0,
                            a = e - c / 1e3;
                        if (a > e) a = e;
                        else if (a <= 0) return t = a, void d(a = 3, (function() {
                            return l(t)
                        }));
                        console.log("timeout:", a), d(a, l)
                    }
                }), [n, c, u]);
                var _ = Object(a.useMemo)((function() {
                        var e = Math.floor(f / 60);
                        return {
                            minutes: e,
                            seconds: Math.floor(f - 60 * e)
                        }
                    }), [f]),
                    I = _.minutes,
                    A = _.seconds,
                    D = Object(a.useMemo)((function() {
                        var e = j.getState().test.choices;
                        return {
                            empty: Object.values(e).filter((function(e) {
                                return "0" === e
                            })).length,
                            min: I
                        }
                    }), [v]),
                    P = D.empty,
                    R = D.min;
                return r.a.createElement(r.a.Fragment, null, v && x <= 2 && r.a.createElement(cn, {
                    msg: un[x].format(R, P),
                    onAccept: function() {
                        return S(x + 1)
                    },
                    onCancel: function() {
                        return C(!0)
                    },
                    step: x
                }), r.a.createElement("div", {
                    className: "board-head"
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("h4", null, "Th\u1eddi gian c\xf2n l\u1ea1i"), r.a.createElement("span", {
                    className: "time-left ".concat(u > 0 ? "is-plus" : "is-minus")
                }, String(I).padStart(2, "0"), ":", String(A).padStart(2, "0"), 0 !== u && r.a.createElement("small", null, function() {
                    var e = u / 1e3,
                        t = Math.floor(Math.abs(e) / 60),
                        n = Math.floor(Math.abs(e) - 60 * t);
                    return r.a.createElement(r.a.Fragment, null, "(", e < 0 ? "-" : "+", t > 0 ? "".concat(t, " ph\xfat") : "", n > 0 ? " ".concat(n, " gi\xe2y") : "", ")")
                }())))))
            }

            function sn(e) {
                var t = e.isMarked,
                    n = void 0 !== t && t,
                    a = e.isDoing,
                    c = void 0 !== a && a,
                    u = e.isDone,
                    l = void 0 !== u && u,
                    i = e.onClick,
                    s = void 0 === i ? function() {} : i,
                    o = e.children,
                    m = ["items"];
                return n && m.push("marks"), c && m.push("doing"), l && m.push("done"), r.a.createElement("a", {
                    href: "#!",
                    className: m.join(" "),
                    onClick: s
                }, r.a.createElement("span", null, o))
            }

            function on(e) {
                var t = e.qIndex,
                    n = e.onIndexClick,
                    c = Object(s.b)(),
                    u = Object(s.c)((function(e) {
                        return e.test.preferences.marks
                    })),
                    l = Object(s.c)((function(e) {
                        return e.test.choices
                    })),
                    i = Object(s.c)((function(e) {
                        return e.test.questions
                    })),
                    o = Object(s.c)((function(e) {
                        return e.test.multipleChoiceId
                    })),
                    m = function(e) {
                        if (i[e]) {
                            if (l[i[e].id] > 0) return !0;
                            if (i[e].type === H.SHORT_ANSWER && "" !== l[i[e].id] && "0" !== l[i[e].id]) return !0;
                            if (i[e].type === H.TABLE || i[e].type === H.MANY_IN_ONE) {
                                var t = i[e].smalls;
                                if (!Ct.isNil(t)) {
                                    var n = k()(t);
                                    return Ct.remove(n, (function(e) {
                                        return !l[e.id] || "0" === l[e.id]
                                    })), 0 !== n.length
                                }
                            }
                        }
                        return !1
                    };
                return Object(a.useEffect)((function() {
                    o > 0 && c(At(o))
                }), [o]), r.a.createElement("div", {
                    className: "board-body"
                }, r.a.createElement("h4", {
                    className: "m-bottom-20"
                }, "Danh s\xe1ch c\xe2u h\u1ecfi"), r.a.createElement("div", {
                    className: "tab-content"
                }, r.a.createElement("div", {
                    className: "items-content has-scroll active",
                    id: "first-half"
                }, Object(Ct.range)(0, i.length).map((function(e, a) {
                    var c = !!u[e];
                    return r.a.createElement(sn, {
                        isMarked: c,
                        isDoing: e === t,
                        isDone: m(e),
                        onClick: function() {
                            return n(e)
                        },
                        key: a
                    }, e + 1)
                })))))
            }

            function mn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function pn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mn(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function fn(e) {
                var t = e.src,
                    n = e.alt,
                    c = e.style,
                    u = void 0 === c ? {} : c,
                    l = e.className,
                    i = void 0 === l ? "" : l,
                    s = Object(a.useState)(!1),
                    o = y()(s, 2),
                    m = o[0],
                    p = o[1],
                    f = Object(a.useMemo)((function() {
                        return p(!1), t
                    }), [t]),
                    d = Object(a.useCallback)((function() {
                        p(!0)
                    }), [m]);
                return r.a.createElement(r.a.Fragment, null, !m && r.a.createElement("div", {
                    style: {
                        textAlign: "center",
                        fontSize: "13px"
                    }
                }, "\u0110ang t\u1ea3i \u1ea3nh..."), r.a.createElement("img", {
                    className: i,
                    style: pn({
                        display: m ? "block" : "none"
                    }, u),
                    alt: n,
                    src: f,
                    onLoad: d
                }))
            }
            String.prototype.format = function() {
                var e = this;
                for (var t in arguments) e = e.replace("{" + t + "}", arguments[t]);
                return e
            };
            var dn = H,
                En = B;
            var bn = function(e) {
                    var t = e.question,
                        n = e.index,
                        c = Object(s.b)(),
                        u = Object(s.c)((function(e) {
                            return e.test.choices
                        })),
                        l = Object(s.c)((function(e) {
                            return e.test.multipleChoiceId
                        })),
                        i = t.id,
                        o = t.content,
                        m = t.o1,
                        p = t.o2,
                        f = t.o3,
                        d = t.o4,
                        E = t.o5,
                        b = t.o6,
                        v = t.image,
                        h = t.type,
                        g = Object(a.useMemo)((function() {
                            return u[i] ? u[i] : 0
                        }), [u, i]),
                        y = function(e) {
                            var t = e.id,
                                n = e.value;
                            n !== u[t] ? (c(_e({
                                id: t,
                                val: u[t]
                            })), c(Tt(l, {
                                id: t,
                                option: n
                            }))) : (c(_e({
                                id: t,
                                val: 0
                            })), c(Tt(l, {
                                id: t,
                                option: 0
                            })))
                        },
                        O = function(e) {
                            var t = e.id,
                                n = e.value;
                            c(_e({
                                id: t,
                                val: u[t]
                            })), c(Tt(l, {
                                id: t,
                                option: n
                            }))
                        },
                        x = Object(a.useMemo)((function() {
                            return Et()(o)
                        }), [o]);

                    function S(e) {
                        var t = e.which || e.keyCode; - 1 !== [Zt, Vt, Kt, Jt].indexOf(t) && e.preventDefault()
                    }
                    return r.a.createElement("div", {
                        className: "sub-question sub-question__many_in_one"
                    }, r.a.createElement("div", {
                        className: "info"
                    }, r.a.createElement("strong", {
                        className: "mr-2"
                    }, n + 1, ". "), r.a.createElement("p", null, x)), v && r.a.createElement(fn, {
                        className: "mt-2 mb-2",
                        style: {
                            margin: "0 auto"
                        },
                        src: v,
                        alt: "ZA Challenge"
                    }), r.a.createElement("div", {
                        className: "answers"
                    }, h === dn.YES_NO && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        key: "".concat(l, "_").concat(i, "_").concat(m),
                        className: "answer-btn ml-2 ".concat(_.isEqual(g, String(En.YES_ANSWER)) && "active"),
                        onClick: function() {
                            return y({
                                id: i,
                                value: String(En.YES_ANSWER)
                            })
                        }
                    }, r.a.createElement("div", null, m)), r.a.createElement("div", {
                        key: "".concat(l, "_").concat(i, "_").concat(p),
                        className: "answer-btn ml-2 ".concat(_.isEqual(g, String(En.NO_ANSWER)) && "active"),
                        onClick: function() {
                            return y({
                                id: i,
                                value: String(En.NO_ANSWER)
                            })
                        }
                    }, r.a.createElement("div", null, p))), r.a.createElement(r.a.Fragment, null, (h === dn.MULTIPLE_CHOICE_2 || h === dn.MULTIPLE_CHOICE_3 || h === dn.MULTIPLE_CHOICE_4 || h === dn.MULTIPLE_CHOICE_5 || h === dn.MULTIPLE_CHOICE_6) && r.a.createElement("div", {
                        className: "answer-items flex flex-wrap"
                    }, r.a.createElement("div", {
                        className: "form-groups" + (1 === g ? " active" : "")
                    }, r.a.createElement("div", {
                        className: "bl-l"
                    }, r.a.createElement("input", {
                        type: "radio",
                        checked: 1 === g,
                        onKeyDown: S,
                        onChange: function() {
                            return O({
                                id: i,
                                value: 1
                            })
                        }
                    }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "A"), r.a.createElement("p", null, m)))), r.a.createElement("div", {
                        className: "form-groups" + (2 === g ? " active" : "")
                    }, r.a.createElement("div", {
                        className: "bl-l"
                    }, r.a.createElement("input", {
                        type: "radio",
                        checked: 2 === g,
                        onKeyDown: S,
                        onChange: function() {
                            return O({
                                id: i,
                                value: 2
                            })
                        }
                    }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "B"), r.a.createElement("p", null, p)))), (h === dn.MULTIPLE_CHOICE_3 || h === dn.MULTIPLE_CHOICE_4 || h === dn.MULTIPLE_CHOICE_5 || h === dn.MULTIPLE_CHOICE_6) && r.a.createElement("div", {
                        className: "form-groups" + (3 === g ? " active" : "")
                    }, r.a.createElement("div", {
                        className: "bl-l"
                    }, r.a.createElement("input", {
                        type: "radio",
                        checked: 3 === g,
                        onKeyDown: S,
                        onChange: function() {
                            return O({
                                id: i,
                                value: 3
                            })
                        }
                    }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "C"), r.a.createElement("p", null, f)))), (h === dn.MULTIPLE_CHOICE_4 || h === dn.MULTIPLE_CHOICE_5 || h === dn.MULTIPLE_CHOICE_6) && r.a.createElement("div", {
                        className: "form-groups" + (4 === g ? " active" : "")
                    }, r.a.createElement("div", {
                        className: "bl-l"
                    }, r.a.createElement("input", {
                        type: "radio",
                        checked: 4 === g,
                        onKeyDown: S,
                        onChange: function() {
                            return O({
                                id: i,
                                value: 4
                            })
                        }
                    }), r.a.createElement("label", null, r.a.createElement("span", null, "D"), r.a.createElement("p", null, d)))), (dn.MULTIPLE_CHOICE_5 === h || h === dn.MULTIPLE_CHOICE_6) && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "form-groups" + (5 === g ? " active" : "")
                    }, r.a.createElement("div", {
                        className: "bl-l"
                    }, r.a.createElement("input", {
                        type: "radio",
                        checked: 5 === g,
                        onKeyDown: S,
                        onChange: function() {
                            return O({
                                id: i,
                                value: 5
                            })
                        }
                    }), r.a.createElement("label", null, r.a.createElement("span", null, "E"), r.a.createElement("p", null, E))))), dn.MULTIPLE_CHOICE_6 === h && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "form-groups" + (6 === g ? " active" : "")
                    }, r.a.createElement("div", {
                        className: "bl-l"
                    }, r.a.createElement("input", {
                        type: "radio",
                        checked: 6 === g,
                        onKeyDown: S,
                        onChange: function() {
                            return O({
                                id: i,
                                value: 6
                            })
                        }
                    }), r.a.createElement("label", null, r.a.createElement("span", null, "F"), r.a.createElement("p", null, b)))))))))
                },
                vn = H,
                hn = B;

            function gn(e) {
                var t = e.question,
                    n = void 0 === t ? {} : t,
                    c = Object(s.b)(),
                    u = Object(s.c)((function(e) {
                        return e.test.choices
                    })),
                    l = Object(s.c)((function(e) {
                        return e.test.multipleChoiceId
                    })),
                    i = n.id,
                    o = n.content,
                    m = n.image,
                    p = n.audio,
                    f = n.o1,
                    d = n.o2,
                    E = n.o3,
                    b = n.o4,
                    v = n.o5,
                    h = n.o6,
                    g = n.type,
                    y = n.smalls,
                    O = n.parentContent,
                    x = void 0 === O ? "" : O,
                    S = n.parentImage,
                    w = Object(a.useMemo)((function() {
                        return u[i] ? u[i] : 0
                    }), [u, i]),
                    N = function(e) {
                        var t = e.id,
                            n = e.value;
                        c(_e({
                            id: t,
                            val: u[t]
                        })), c(Tt(l, {
                            id: t,
                            option: n
                        }))
                    },
                    k = Object(a.useMemo)((function() {
                        return Et()(o)
                    }), [o]),
                    C = Object(a.useMemo)((function() {
                        return x ? Et()(x) : null
                    }), [x]);

                function j(e) {
                    var t = e.which || e.keyCode; - 1 !== [Zt, Vt, Kt, Jt].indexOf(t) && e.preventDefault()
                }
                var _ = g === vn.TABLE || g === vn.MANY_IN_ONE,
                    T = !!x;
                return r.a.createElement("div", {
                    className: "question-board ".concat(C || _ ? "question-group" : "")
                }, r.a.createElement("div", {
                    className: "quest mb-4",
                    style: {
                        position: "relative"
                    }
                }, C && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
                    className: "quest-text"
                }, C)), !C && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
                    className: "quest-text m-bottom-30"
                }, k)), _ && m && r.a.createElement(fn, {
                    className: "mt-2",
                    style: {
                        margin: "0 auto"
                    },
                    src: m,
                    alt: "ZA Challenge"
                }), T && S && r.a.createElement(fn, {
                    className: "mt-2",
                    style: {
                        margin: "0 auto"
                    },
                    src: S,
                    alt: "ZA Challenge"
                }), !_ && !T && m && r.a.createElement(fn, {
                    className: "mt-2",
                    style: {
                        margin: "0 auto"
                    },
                    src: m,
                    alt: "ZA Challenge"
                }), p && r.a.createElement("audio", {
                    className: "quest-audio",
                    controls: !0
                }, r.a.createElement("source", {
                    src: p,
                    type: "audio/mpeg"
                }), "Your browser does not support the audio element.")), r.a.createElement("div", {
                    className: "answer one-col"
                }, T && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
                    className: "m-bottom-30"
                }, k), m && r.a.createElement(fn, {
                    className: "mt-2 mb-2",
                    style: {
                        margin: "0 auto"
                    },
                    src: m,
                    alt: "ZA Challenge"
                })), r.a.createElement("form", null, r.a.createElement(r.a.Fragment, null, (g === vn.MULTIPLE_CHOICE_3 || g === vn.MULTIPLE_CHOICE_4 || g === vn.MULTIPLE_CHOICE_5 || g === vn.MULTIPLE_CHOICE_6) && r.a.createElement("div", {
                    className: "flex flex-wrap justify-between"
                }, r.a.createElement("div", {
                    className: "form-groups" + (1 === w ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: 1 === w,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: 1
                        })
                    }
                }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "A"), r.a.createElement("p", null, f)))), r.a.createElement("div", {
                    className: "form-groups" + (2 === w ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: 2 === w,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: 2
                        })
                    }
                }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "B"), r.a.createElement("p", null, d)))), r.a.createElement("div", {
                    className: "form-groups" + (3 === w ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: 3 === w,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: 3
                        })
                    }
                }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "C"), r.a.createElement("p", null, E)))), (vn.MULTIPLE_CHOICE_6 === g || vn.MULTIPLE_CHOICE_5 === g || vn.MULTIPLE_CHOICE_4 === g) && r.a.createElement("div", {
                    className: "form-groups" + (4 === w ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: 4 === w,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: 4
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "D"), r.a.createElement("p", null, b)))), r.a.createElement(r.a.Fragment, null, (vn.MULTIPLE_CHOICE_5 === g || vn.MULTIPLE_CHOICE_6 === g) && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups" + (5 === w ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: 5 === w,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: 5
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "E"), r.a.createElement("p", null, v))))), vn.MULTIPLE_CHOICE_6 === g && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups" + (6 === w ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: 6 === w,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: 6
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "F"), r.a.createElement("p", null, h)))))))), vn.SHORT_ANSWER === g && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups"
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    style: {
                        paddingLeft: "0"
                    },
                    className: "input-m",
                    type: "text",
                    value: 0 !== w && "0" !== w ? w : "",
                    onChange: function(e) {
                        return N({
                            id: i,
                            value: e.target.value
                        })
                    },
                    placeholder: "Nh\u1eadp c\xe2u tr\u1ea3 l\u1eddi / Your anwser"
                })))), vn.YES_NO === g && r.a.createElement("div", {
                    className: "flex flex-wrap justify-between"
                }, r.a.createElement("div", {
                    className: "form-groups" + (w === hn.YES_ANSWER ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: w === hn.YES_ANSWER,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: hn.YES_ANSWER
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "A"), r.a.createElement("p", null, f)))), r.a.createElement("div", {
                    className: "form-groups" + (w === hn.NO_ANSWER ? " active" : "")
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: w === hn.NO_ANSWER,
                    onKeyDown: j,
                    onChange: function() {
                        return N({
                            id: i,
                            value: hn.NO_ANSWER
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "B"), r.a.createElement("p", null, d))))), (vn.MANY_IN_ONE === g || vn.TABLE === g) && r.a.createElement(r.a.Fragment, null, y && r.a.createElement(r.a.Fragment, null, Array.from(y).map((function(e, t) {
                    return r.a.createElement(bn, {
                        key: "".concat(l, "_").concat(e.id),
                        index: t,
                        question: e
                    })
                })))))))
            }
            var yn = n.p + "assets/images/32-verbal.png",
                On = n.p + "assets/images/32-quantitive.png",
                xn = n.p + "assets/images/32-integrated.png";

            function Sn(e) {
                var t = e.sectionId,
                    n = e.sectionName,
                    a = Object(s.c)((function(e) {
                        return e.common.user
                    })),
                    c = 1 === t ? yn : 2 === t ? On : 3 === t ? xn : "";
                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "infor-user"
                }, r.a.createElement("div", {
                    className: "avatar"
                }, r.a.createElement("img", {
                    src: a.picture,
                    alt: "ZA Challenge"
                })), r.a.createElement("div", {
                    className: "name"
                }, a.name)), n && r.a.createElement("div", {
                    className: "infor-section"
                }, r.a.createElement("div", {
                    className: "name mb-2 flex"
                }, r.a.createElement("img", {
                    src: c,
                    alt: ""
                }), "\xa0\xa0", n)))
            }

            function wn(e) {
                var t = e.onAccept,
                    n = Object(s.b)(),
                    c = Object(s.c)((function(e) {
                        return e.test.currentVal
                    })),
                    u = Object(s.c)((function(e) {
                        return e.test.multipleChoiceId
                    })),
                    l = Object(s.c)((function(e) {
                        return e.test.submissionId
                    }));
                return Object(a.useEffect)((function() {
                    if (u > 0 && null != c) {
                        var e = c;
                        t = e /*, an.v10.updateDetail(u, JSON.stringify({
                            outFocus: t
                        }), l), n(Te(e)) */
                    }
                    var t
                }), []), r.a.createElement(zt, {
                    onOkText: "B\u1eaft \u0111\u1ea7u",
                    onOk: t
                }, r.a.createElement("div", {
                    className: "warning-icon text-center"
                }, r.a.createElement("img", {
                    style: {
                        margin: "0 auto"
                    },
                    src: rn,
                    alt: ""
                }), r.a.createElement("h2", {
                    className: "font-bold mb-2 text-2xl"
                }, "L\u01b0u \xfd!")), r.a.createElement("p", {
                    className: "text-center"
                }, "B\u1ea1n \u0111\xe3 tho\xe1t ra ngo\xe0i ", r.a.createElement("strong", {
                    style: {
                        color: "red"
                    }
                }, c), " ", c ? "l\u1ea7n" : "", ",", r.a.createElement("br", null), " b\u1ea5m ", r.a.createElement("strong", null, '"B\u1eaft \u0111\u1ea7u"'), " \u0111\u1ec3 quay l\u1ea1i l\xe0m b\xe0i"))
            }
            var Nn = n.p + "assets/images/Timeout.png";

            function kn(e) {
                var t = e.onAccept,
                    n = e.currentSectionName,
                    c = e.elapsedTime_next_section,
                    u = T(),
                    l = u.timeVal,
                    i = u.startTimer,
                    s = u.stopTimer,
                    o = (Me(), qe(), Object(a.useState)(!1)),
                    m = y()(o, 2),
                    p = m[0],
                    f = m[1],
                    d = Object(a.useCallback)(h()(x.a.mark((function e() {
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (f(!0), s(), !("function" === typeof t)) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.next = 1, t();
                                case 1:
                                    f(!1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [t]);
                Object(a.useEffect)((function() {
                    var e = 300 - Math.abs(c);
                    e < 0 ? d() : i(e, d)
                }), []);
                var E = Object(a.useMemo)((function() {
                        var e = Math.floor(l / 60);
                        return {
                            minutes: e,
                            seconds: Math.floor(l - 60 * e)
                        }
                    }), [l]),
                    b = E.minutes,
                    v = E.seconds;
                return r.a.createElement(zt, {
                    loading: p,
                    onShowOkButton: !1
                }, r.a.createElement("div", {
                    className: "warning-icon text-center"
                }, r.a.createElement("img", {
                    style: {
                        margin: "0 auto"
                    },
                    src: Nn,
                    alt: ""
                }), r.a.createElement("h2", {
                    className: "font-bold mb-2 text-2xl"
                }, "H\u1ebft gi\u1edd!")), r.a.createElement("p", {
                    className: "text-center"
                }, "\u0110\xe3 h\u1ebft th\u1eddi gian cho ph\u1ea7n thi ", r.a.createElement("strong", null, n), r.a.createElement("br", null), " th\xed sinh c\xf3 ", r.a.createElement("strong", null, Math.floor(5), " ph\xfat"), " ngh\u1ec9 gi\u1ea3i lao", r.a.createElement("br", null), " tr\u01b0\u1edbc khi b\u1eaft \u0111\u1ea7u ph\u1ea7n thi k\u1ebf ti\u1ebfp."), r.a.createElement("br", null), r.a.createElement("div", {
                    className: "text-center"
                }, r.a.createElement("strong", {
                    className: "time-left is-minus text-2xl\t"
                }, String(b).padStart(2, "0"), ":", String(v).padStart(2, "0"))))
            }

            function Cn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function jn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Cn(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _n = D,
                Tn = F,
                In = L,
                An = {
                    id: 0,
                    content: "T\u1ea3i c\xe2u h\u1ecfi th\u1ea5t b\u1ea1i...",
                    image: null,
                    o1: "L\u1ef1a ch\u1ecdn A...",
                    o2: "L\u1ef1a ch\u1ecdn B...",
                    o3: "L\u1ef1a ch\u1ecdn C...",
                    o4: "L\u1ef1a ch\u1ecdn D..."
                };
            var Dn = function(e) {
                    var t = e.smClient,
                        n = e.fsOption,
                        c = n.isFullscreen,
                        u = n.setFullscreen,
                        i = n.exitFullscreen,
                        m = (n.fsRef, Object(s.b)()),
                        p = Object(l.useHistory)(),
                        f = Me(),
                        E = Object(s.d)(),
                        b = Object(s.c)((function(e) {
                            return e.test.preloadedMultipleChoices
                        })),
                        v = Object(s.c)((function(e) {
                            return e.test.questions
                        })),
                        g = Object(s.c)((function(e) {
                            return e.test.choices
                        })),
                        O = Object(s.c)((function(e) {
                            return e.test.preQuestionState
                        })),
                        S = Object(s.c)((function(e) {
                            return e.test.multipleChoiceIds
                        })),
                        w = Object(s.c)((function(e) {
                            return e.test.multipleChoiceId
                        })),
                        N = Object(s.c)((function(e) {
                            return e.test.submissionId
                        })),
                        C = Object(s.c)((function(e) {
                            return e.test.preferences.marks
                        })),
                        _ = Object(s.c)((function(e) {
                            return e.test.section
                        })),
                        T = Pe(),
                        I = Object(a.useState)(0),
                        D = y()(I, 2),
                        P = D[0],
                        R = D[1],
                        L = Object(a.useState)(0),
                        M = y()(L, 2)[1],
                        F = Object(a.useState)(null),
                        U = y()(F, 2),
                        q = U[0],
                        B = U[1],
                        H = Object(a.useState)(null),
                        W = y()(H, 2),
                        Y = W[0],
                        z = W[1],
                        G = Object(a.useState)(0),
                        Z = y()(G, 2),
                        K = Z[0],
                        V = Z[1],
                        J = Object(a.useState)(!1),
                        Q = y()(J, 2),
                        X = Q[0],
                        $ = Q[1],
                        ee = function(e) {
                            var t = Object(s.c)((function(e) {
                                    return e.test.multipleChoiceId
                                })),
                                n = Object(s.b)();
                            return Object(a.useCallback)((function() {
                                n(It(t, {
                                    index: e
                                }))
                            }), [t, e])
                        }(P),
                        te = Object(a.useState)(!1),
                        ne = y()(te, 2),
                        ae = ne[0],
                        re = ne[1],
                        ce = Object(a.useState)(0),
                        ue = y()(ce, 2),
                        le = ue[0],
                        ie = ue[1],
                        se = Object(a.useRef)(null);

                    function oe() {
                        return me.apply(this, arguments)
                    }

                    function me() {
                        return (me = h()(x.a.mark((function e() {
                            var t, n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!Array.isArray(v) || 0 !== v.length) {
                                            e.next = 2;
                                            break
                                        }
                                        if (!(t = Array.from(b).find((function(e) {
                                                return e.sectionId === _.currentSectionId
                                            })))) {
                                            e.next = 1;
                                            break
                                        }
                                        return n = t.id, m(Ne(n)), M(t.startTime), B(t.elapsedTime), z(t.time), $(!0), V(t.bonusTime || 0), a = [An], t.questions.length > 0 && (a = t.questions.filter((function(e) {
                                            return !!e
                                        }))), m(xe(a)), m(Te(t.outFocus)), m(_t(n, pe(a))), e.abrupt("return", !0);
                                    case 1:
                                        return e.abrupt("return", !1);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function pe(e) {
                        return e.reduce((function(e, t) {
                            return jn(jn({}, e), {}, A()({}, t.id, t.choice))
                        }), {})
                    }

                    function fe(e) {
                        var t = e;
                        t < 0 ? t = 0 : t >= v.length && (t = v.length - 1), R(t), O.val !== g[O.id] && new Promise((function(e, t) {
                            null !== se.current && clearTimeout(se.current), se.current = setTimeout((function() {
                                var n = E.getState().test.choices;
                                an.v10.update(w, JSON.stringify(n), N).then((function(t) {
                                    t && m(_e({})), e(t)
                                })).catch(t).finally((function() {
                                    se.current = null
                                }))
                            }), 2e3)
                        }))
                    }

                    function de() {
                        return Ee.apply(this, arguments)
                    }

                    function Ee() {
                        return (Ee = h()(x.a.mark((function e() {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        T(h()(x.a.mark((function e() {
                                            var t;
                                            return x.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return t = E.getState().test.choices, e.next = 1, an.v10.submit(N, w, JSON.stringify(t));
                                                    case 1:
                                                        m(Dt()), R(0), $(!1);
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return Object(a.useEffect)((function() {
                            if (ae) return f.sendLayoutStatus(Tn.Status.READY);
                            if ((null === _ || void 0 === _ ? void 0 : _.mcStatus) === In.DONE) return f.sendLayoutStatus(Tn.Status.WRITING);
                            if (!c) return f.sendLayoutStatus(Tn.Status.OUT_FOCUS);
                            switch (null === _ || void 0 === _ ? void 0 : _.currentSectionId) {
                                case 9:
                                    f.sendLayoutStatus(Tn.Status.QUANTITATIVE);
                                    break;
                                case 10:
                                    f.sendLayoutStatus(Tn.Status.VERBAL)
                            }
                        }), [c, ae, _]), Object(a.useEffect)((function() {
                            N > 0 && b && !Ct.isNil(_) && _.mcStatus !== In.DONE && T(h()(x.a.mark((function e() {
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, oe();
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))))
                        }), [N, b, S, _]),
                        function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keyup",
                                n = arguments.length > 2 ? arguments[2] : void 0,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                            Object(a.useEffect)((function() {
                                function a(t) {
                                    var a = t.which || t.keyCode;
                                    e.includes(a) && n(a, t)
                                }
                                return window.addEventListener(t, a),
                                    function() {
                                        window.removeEventListener(t, a)
                                    }
                            }), k()(r))
                        }([Zt, Vt], "keyup", (function(e, t) {
                            switch (e) {
                                case Zt:
                                    fe(P - 1);
                                    break;
                                case Vt:
                                    fe(P + 1)
                            }
                        }), [P, v]), j((function(e) {})),
                        function(e) {
                            var t = function() {
                                e("blur")
                            };
                            Object(a.useEffect)((function() {
                                return window.addEventListener("blur", t),
                                    function() {
                                        window.removeEventListener("blur", t)
                                    }
                            }), [])
                        }((function() {
                            i()
                        })), Object(a.useEffect)((function() {
                            var e = function() {
                                var e = h()(x.a.mark((function e() {
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 1, t.nextStatus({
                                                    apiUpdate: !0
                                                });
                                            case 1:
                                                i(), re(!1), p.push(o.ESSAY);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            _ && _.mcStatus === In.DONE && e()
                        }), [_]), Object(a.useEffect)((function() {
                            return f.add(_n.MessageType.ZAC_BONUS_TIME, (function(e) {
                                    if (e.body) {
                                        var t = e.body.split("_"),
                                            n = Number(t[0]),
                                            a = Number(t[1]);
                                        B(1e3 * n), V(Number(K) + a)
                                    }
                                })), f.add(_n.MessageType.ZAC_PAUSE_TIME, (function() {
                                    i(), p.replace(d)
                                })),
                                function() {
                                    f.remove(_n.MessageType.ZAC_BONUS_TIME), f.remove(_n.MessageType.ZAC_PAUSE_TIME)
                                }
                        }), [K]), r.a.createElement(r.a.Fragment, null, ae && r.a.createElement(kn, {
                            onAccept: h()(x.a.mark((function e() {
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 1, t.nextSection({
                                                apiUpdate: !0
                                            });
                                        case 1:
                                            e.sent && (re(!1), ie(0));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            currentSectionName: _.currentSectionName,
                            elapsedTime_next_section: le
                        }), !c && !ae && r.a.createElement(wn, {
                            onAccept: function() {
                                u()
                            }
                        }), r.a.createElement("div", {
                            style: {
                                display: c ? "block" : "none"
                            }
                        }, r.a.createElement("div", {
                            className: "question"
                        }, r.a.createElement("div", {
                            className: "page-content"
                        }, r.a.createElement("div", {
                            className: "question-wrap"
                        }, r.a.createElement("div", {
                            className: "bl-question-content"
                        }, r.a.createElement("div", {
                            className: "bl-question-content-wrap"
                        }, r.a.createElement("div", {
                            className: "cover"
                        }, function() {
                            var e = P - 1,
                                t = P + 1;
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: "next-prev"
                            }, P > 0 ? r.a.createElement("div", {
                                className: "btn-action btn-prev",
                                onClick: function() {
                                    return fe(e)
                                }
                            }, "C\xc2U TR\u01af\u1edaC ", r.a.createElement("span", null, e + 1)) : r.a.createElement("div", {
                                className: "btn-action btn-prev opacity-0\t"
                            }), r.a.createElement("h3", null, "C\xe2u s\u1ed1 ", r.a.createElement("span", null, P + 1)), P < v.length - 1 ? r.a.createElement("div", {
                                className: "btn-action btn-next",
                                onClick: function() {
                                    return fe(t)
                                }
                            }, r.a.createElement("span", null, t + 1), " C\xc2U SAU") : r.a.createElement("div", {
                                className: "btn-action btn-prev opacity-0\t"
                            })))
                        }(), r.a.createElement(gn, {
                            question: v[P]
                        }), r.a.createElement("div", {
                            className: "question-mark"
                        }, r.a.createElement("div", {
                            className: "wrap"
                        }, r.a.createElement("input", {
                            type: "checkbox",
                            id: "checked",
                            checked: !!C[P],
                            onChange: ee
                        }), r.a.createElement("label", {
                            htmlFor: "checked"
                        }, "\u0110\xe1nh d\u1ea5u c\xe2u n\xe0y")))))), r.a.createElement("div", {
                            className: "right-section"
                        }, r.a.createElement("div", {
                            className: "bl-question-board"
                        }, r.a.createElement(Sn, {
                            sectionId: null === _ || void 0 === _ ? void 0 : _.currentSectionId,
                            sectionName: null === _ || void 0 === _ ? void 0 : _.currentSectionName
                        }), r.a.createElement("div", {
                            className: "mb-4"
                        }), r.a.createElement(ln, {
                            onTimeEnd: h()(x.a.mark((function e() {
                                var t, n = arguments;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = n.length > 0 && void 0 !== n[0] ? n[0] : 0, e.next = 1, de();
                                        case 1:
                                            ie(t), re(!0);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            isStarting: X,
                            elapsedTime: q,
                            bonusTime: Number(K),
                            sectionTime: Y,
                            submitTest: h()(x.a.mark((function e() {
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }), r.a.createElement(on, {
                            qIndex: P,
                            onIndexClick: fe
                        }), r.a.createElement("div", {
                            className: "note"
                        }, r.a.createElement("div", {
                            className: "note-item"
                        }, r.a.createElement("div", {
                            className: "item bl-l"
                        }, r.a.createElement("span", null), r.a.createElement("em", null, "Ch\u01b0a ch\u1ecdn \u0111\xe1p \xe1n")), r.a.createElement("div", {
                            className: "item bl-r doing"
                        }, r.a.createElement("span", null), r.a.createElement("em", null, "\u0110ang l\xe0m"))), r.a.createElement("div", {
                            className: "note-item"
                        }, r.a.createElement("div", {
                            className: "item bl-l done"
                        }, r.a.createElement("span", null), r.a.createElement("em", null, "\u0110\xe3 ch\u1ecdn \u0111\xe1p \xe1n")), r.a.createElement("div", {
                            className: "item bl-r marks"
                        }, r.a.createElement("span", null), r.a.createElement("em", null, "\u0111\xe1nh d\u1ea5u")))))))))))
                },
                Pn = Object(a.createContext)(),
                Rn = function(e) {
                    var t = e.value,
                        n = e.children;
                    return r.a.createElement(Pn.Provider, {
                        value: t
                    }, n)
                },
                Ln = n(44),
                Mn = n.n(Ln),
                Fn = [tn, Gt];
            var Un = function() {
                var e = Object(a.useContext)(Pn),
                    t = Object(s.b)(),
                    n = qe(),
                    c = Object(a.useRef)({}),
                    u = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.onChange,
                            r = t.onError,
                            c = Object(a.useState)(!1),
                            u = y()(c, 2),
                            l = u[0],
                            i = u[1],
                            s = function() {
                                var t = h()(x.a.mark((function t() {
                                    return x.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", Mn.a.request(e.current));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            o = function() {
                                var e = h()(x.a.mark((function e() {
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", Mn.a.exit());
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            m = function() {
                                var e = h()(x.a.mark((function e() {
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", Mn.a.toggle());
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return Object(a.useEffect)((function() {
                            function e(e) {
                                /*
                                var t = Mn.a.isFullscreen;
                                */
                                var t = true;
                                i(t), n && "function" === typeof n && n(t, e)
                            }
                            return Mn.a.on("change", e),
                                function() {
                                    Mn.a.off("change", e)
                                }
                        }), [n]), Object(a.useEffect)((function() {
                            function e(e) {
                                r && "function" === typeof r && r(e)
                            }
                            return Mn.a.on("error", e),
                                function() {
                                    Mn.a.off("error", e)
                                }
                        }), [r]), Object(a.useEffect)((function() {
                            function e(e) {
                                var t = e.which || e.keyCode || 0;
                                Fn.includes(t) && (e.preventDefault(), t === tn ? m() : t === Gt && o())
                            }
                            return window.addEventListener("keydown", e),
                                function() {
                                    window.removeEventListener("keydown", e)
                                }
                        }), []), [l, s, o, m]
                    }(e, {
                        onChange: c.current.onChange
                    }),
                    l = y()(u, 3),
                    i = l[0],
                    o = l[1],
                    m = l[2],
                    p = Object(a.useState)(!1),
                    f = y()(p, 2),
                    d = f[0],
                    E = f[1],
                    b = (Object(s.c)((function(e) {
                        return e.test.submission
                    })), Object(s.c)((function(e) {
                        return e.test.multipleChoices
                    }))),
                    v = {
                        fetchQuestions: function() {
                            var e = h()(x.a.mark((function e(t) {
                                var n, a, r;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = JSON.parse(JSON.stringify(t)), a = 0;
                                        case 1:
                                            if (!(a < n.length)) {
                                                e.next = 5;
                                                break
                                            }
                                            if (!n[a].questionIds) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 2, an.v10.getQuestionsByIds(n[a].questionIds, n[a].submissionId);
                                        case 2:
                                            if (r = e.sent) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", null);
                                        case 3:
                                            n[a].questions = r;
                                        case 4:
                                            a++, e.next = 1;
                                            break;
                                        case 5:
                                            return e.abrupt("return", n);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }.fetchQuestions;
                Object(a.useEffect)((function() {
                    b && g()
                }), [b]);
                var g = function() {
                    var e = h()(x.a.mark((function e() {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, v(b);
                                case 1:
                                    (n = e.sent) && t({
                                        type: te,
                                        payload: {
                                            preloadedMultipleChoices: n
                                        }
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return r.a.createElement(r.a.Fragment, null, !d && r.a.createElement(zt, {
                    onOkText: "B\u1eaft \u0111\u1ea7u",
                    onOk: function() {
                        o().then((function() {
                            return E(!0)
                        })).catch(console.error)
                    }
                }, r.a.createElement("p", {
                    className: "text-left"
                }, "Nh\u1ea5n ", r.a.createElement("strong", null, "b\u1eaft \u0111\u1ea7u"), " \u0111\u1ec3 l\xe0m b\xe0i")), d && r.a.createElement(Dn, {
                    fsOption: {
                        isFullscreen: i,
                        setFullscreen: o,
                        exitFullscreen: m,
                        fsRef: c
                    },
                    smClient: n
                }))
            };

            function qn(e) {
                var t = e.isVisible,
                    n = e.vsrc,
                    c = e.vduration,
                    u = e.countdownSecs,
                    l = Object(s.c)((function(e) {
                        return e.test.submissionId
                    })),
                    i = Object(a.useState)(null),
                    o = y()(i, 2),
                    m = o[0],
                    p = o[1],
                    f = Object(a.useState)(null),
                    d = y()(f, 2),
                    E = d[0],
                    b = d[1],
                    v = Object(a.useState)(!1),
                    h = y()(v, 2),
                    g = h[0],
                    O = h[1],
                    x = Object(a.useRef)(),
                    S = Object(a.useRef)(!0);
                return Object(a.useEffect)((function() {
                    n && p(n)
                }), [n]), Object(a.useEffect)((function() {
                    return function() {
                        S.current = !1
                    }
                }), []), Object(a.useEffect)((function() {
                    t && x.current && x.current.play().then((function(e) {})).catch((function() {
                        O(!0)
                    }))
                }), [t]), Object(a.useEffect)((function() {
                    l > 0 && m && c > 0 && (u <= 0 || b(c > u ? "".concat(m, "#t=").concat(c - u) : m))
                }), [l, m, c, u]), r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "wrapper ".concat(g ? "pause" : "")
                }, r.a.createElement("video", {
                    key: E,
                    ref: x,
                    id: "video-default",
                    width: "100%",
                    aspect: "16:9",
                    preload: "auto",
                    muted: !1,
                    playsInline: !0
                }, r.a.createElement("source", {
                    src: E,
                    type: "video/mp4"
                })), E && g && r.a.createElement("span", {
                    onClick: function() {
                        x.current && x.current.play(), O(!1)
                    },
                    id: "action-play"
                }, r.a.createElement("i", {
                    className: "ic-action"
                }, " "))))
            }
            var Bn = n.p + "assets/images/cover_full_zac_12.jpg",
                Hn = n.p + "assets/images/cover_small_zac_12.jpg",
                Wn = n.p + "assets/images/No_Document.png",
                Yn = n.p + "assets/images/No_internet_device.png",
                zn = n.p + "assets/images/No_Multi-screen.png",
                Gn = n.p + "assets/images/No_phone.png",
                Zn = n.p + "assets/images/No_switch_app.png",
                Kn = n.p + "assets/images/no_cal.jpg";

            function Vn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];

                function r(n) {
                    e.current && !e.current.contains(n.target) && "function" === typeof t && t()
                }
                Object(a.useEffect)((function() {
                    return document.addEventListener("click", r),
                        function() {
                            document.removeEventListener("click", r)
                        }
                }), [t, e].concat(k()(n)))
            }

            function Jn(e) {
                var t = e.user,
                    n = void 0 === t ? {} : t,
                    c = e.hours,
                    u = void 0 === c ? "00" : c,
                    l = e.minutes,
                    i = void 0 === l ? "00" : l,
                    s = e.seconds,
                    o = void 0 === s ? "00" : s,
                    m = e.zlogout,
                    p = void 0 === m ? function() {} : m,
                    f = Object(a.useState)(!1),
                    d = y()(f, 2),
                    E = d[0],
                    b = d[1],
                    v = Object(a.useRef)();
                return Vn(v, (function() {
                    E && b(!1)
                }), [E]), r.a.createElement(r.a.Fragment, null, r.a.createElement("header", null, r.a.createElement("div", {
                    className: "header-container"
                }, r.a.createElement("div", {
                    ref: v,
                    className: "infor-user",
                    onClick: function() {
                        b((function(e) {
                            return !e
                        }))
                    }
                }, r.a.createElement("div", {
                    className: "avatar"
                }, r.a.createElement("img", {
                    src: n.picture,
                    alt: "ZA Challenge"
                })), r.a.createElement("div", {
                    className: "name"
                }, n.name), r.a.createElement("div", {
                    className: "cta-logout ".concat(E ? "is-active" : "")
                }, r.a.createElement("a", {
                    href: "#!",
                    onClick: p
                }, "\u0110\u0103ng xu\u1ea5t"))))), r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "img-countdown"
                }, r.a.createElement("div", {
                    className: "bl bl-l"
                }, r.a.createElement("img", {
                    className: "default",
                    src: Bn,
                    alt: "ZA Challenge"
                }), r.a.createElement("img", {
                    className: "small",
                    src: Hn,
                    alt: "ZA Challenge"
                }), r.a.createElement("div", {
                    className: "timer has-bg"
                }, r.a.createElement("div", {
                    className: "bl-time hours"
                }, r.a.createElement("em", null, u), r.a.createElement("span", null, "Hours")), r.a.createElement("div", {
                    className: "bl-time mins"
                }, r.a.createElement("em", null, i), r.a.createElement("span", null, "Mins")), r.a.createElement("div", {
                    className: "bl-time secs"
                }, r.a.createElement("em", null, o), r.a.createElement("span", null, "Secs")))), r.a.createElement("div", {
                    className: "bl bl-r"
                }, r.a.createElement("div", {
                    className: "tnc"
                }, r.a.createElement("h3", null, "Quy ch\u1ebf thi"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("img", {
                    src: Wn,
                    alt: ""
                }), "\xa0\xa0", r.a.createElement("span", null, "Kh\xf4ng s\u1eed d\u1ee5ng t\xe0i li\u1ec7u hay trao \u0111\u1ed5i trong su\u1ed1t qu\xe1 tr\xecnh l\xe0m b\xe0i.")), r.a.createElement("li", null, r.a.createElement("img", {
                    src: Yn,
                    alt: ""
                }), "\xa0\xa0", r.a.createElement("span", null, "Kh\xf4ng s\u1eed d\u1ee5ng \u0111i\u1ec7n tho\u1ea1i/thi\u1ebft b\u1ecb k\u1ebft n\u1ed1i internet trong su\u1ed1t th\u1eddi gian l\xe0m b\xe0i tr\u1eafc nghi\u1ec7m.")), r.a.createElement("li", null, r.a.createElement("img", {
                    src: zn,
                    alt: ""
                }), "\xa0\xa0", r.a.createElement("span", null, "T\u1eaft ngu\u1ed3n \u0111i\u1ec7n tho\u1ea1i di \u0111\u1ed9ng, \u0111\u1ed3ng h\u1ed3 th\xf4ng minh v\xe0 \u0111\u1eb7t \xfap l\xean b\xe0n.")), r.a.createElement("li", null, r.a.createElement("img", {
                    src: Gn,
                    alt: ""
                }), " \xa0\xa0", r.a.createElement("span", null, "Kh\xf4ng s\u1eed d\u1ee5ng ch\u1ebf \u0111\u1ed9 nhi\u1ec1u m\xe0n h\xecnh.")), r.a.createElement("li", null, r.a.createElement("img", {
                    src: Zn,
                    alt: ""
                }), "\xa0\xa0", r.a.createElement("span", null, "Kh\xf4ng tho\xe1t h\u1ec7 th\u1ed1ng ho\u1eb7c chuy\u1ec3n sang \u1ee9ng d\u1ee5ng kh\xe1c.")), r.a.createElement("li", null, r.a.createElement("div", {
                    style: {
                        width: "60px",
                        height: "60px"
                    }
                }, r.a.createElement("img", {
                    src: Kn,
                    alt: ""
                })), "\xa0\xa0", r.a.createElement("span", null, "Kh\xf4ng s\u1eed d\u1ee5ng m\xe1y t\xednh c\u1ea7m tay."))))))))
            }
            var Qn = function(e, t) {
                    var n = t.async,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    Object(a.useEffect)((function() {
                        var t = document.createElement("script");
                        return t.type = "text/javascript", t.src = e, t.async = n, t.onload = r, document.body.appendChild(t),
                            function() {
                                document.body.removeChild(t)
                            }
                    }), [e])
                },
                Xn = {
                    login: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("me"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    logout: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("logout"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                $n = "".concat(window.location.origin, "/");

            function ea() {
                var e = Object(a.useState)(null),
                    t = y()(e, 2),
                    n = t[0],
                    r = t[1];
                return Qn($e.ZALO_LOGIN_WIDGET, {
                    async: !0
                }, (function() {
                    window.ZaloLoginWidget && r(window.ZaloLoginWidget)
                })), Object(a.useCallback)((function() {
                    n && Xn.logout().then((function() {
                        n.logout($n, {
                            isClearWZUIN: !0
                        }), setInterval((function() {
                            var e = document.getElementById("zl-login-logout-confirm-yes");
                            e && e.click()
                        }), 200)
                    })).catch((function() {
                        window.location.href = $n
                    }))
                }), [n])
            }
            var ta = Object(a.createContext)(),
                na = function(e) {
                    var t = e.value,
                        n = e.children;
                    return r.a.createElement(ta.Provider, {
                        value: t
                    }, n)
                },
                aa = 1,
                ra = 2,
                ca = F,
                ua = "".concat(et),
                la = M;
            var ia = function() {
                var e = Object(l.useHistory)(),
                    t = Me(),
                    n = qe(),
                    c = Object(a.useContext)(ta),
                    u = Object(s.c)((function(e) {
                        return e.common.user
                    })),
                    i = Object(s.c)((function(e) {
                        return e.common.session
                    })),
                    m = T(),
                    p = m.timeVal,
                    f = m.startTimer,
                    d = Object(a.useState)(aa),
                    E = y()(d, 2),
                    b = E[0],
                    v = E[1],
                    g = ea(),
                    O = Pe();

                function S() {
                    return w.apply(this, arguments)
                }

                function w() {
                    return (w = h()(x.a.mark((function t() {
                        return x.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    O(h()(x.a.mark((function t() {
                                        return x.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    e.push(o.MULTIPLE_CHOICES);
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    }))));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                Object(a.useEffect)((function() {
                    n.reroute()
                }), []), Object(a.useEffect)((function() {
                    b !== ra && p && p <= la && v(ra)
                }), [p]), Object(a.useEffect)((function() {
                    if (n.isRouteValid && i && i.startTime && !isNaN(i.startTime)) {
                        var e = c.stop("m_session"),
                            t = i.countdownSecs + Math.round(e / 1e3);
                        t > 0 ? f(t, S) : S()
                    }
                }), [n.isRouteValid, i]), Object(a.useEffect)((function() {
                    n.isRouteValid && t.sendLayoutStatus(ca.Status.READY)
                }), [n.isRouteValid]);
                var N = Object(a.useMemo)((function() {
                        var e = p,
                            t = Math.floor(e / 60),
                            n = Math.floor(t / 60);
                        return e %= 60, t %= 60, {
                            hours: String(n > 0 ? n : 0).padStart(2, "0"),
                            minutes: String(t > 0 ? t : 0).padStart(2, "0"),
                            seconds: String(e > 0 ? e : 0).padStart(2, "0")
                        }
                    }), [p]),
                    k = N.hours,
                    C = N.minutes,
                    j = N.seconds;
                return r.a.createElement(r.a.Fragment, null, b === aa && r.a.createElement("div", {
                    className: "countdown"
                }, r.a.createElement(Jn, {
                    zlogout: g,
                    user: u,
                    hours: k,
                    minutes: C,
                    seconds: j
                })), r.a.createElement("div", {
                    className: "video",
                    style: {
                        display: b !== ra ? "none" : ""
                    }
                }, r.a.createElement(qn, {
                    smClient: n,
                    isVisible: b === ra,
                    vsrc: ua,
                    vduration: la,
                    countdownSecs: i && i.countdownSecs
                })))
            };

            function sa() {
                return r.a.createElement(l.Switch, null, r.a.createElement(l.Redirect, {
                    from: "/",
                    exact: !0,
                    to: o.COUNTDOWN
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: o.COUNTDOWN,
                    component: ia
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: o.MULTIPLE_CHOICES,
                    component: Un
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: o.ESSAY,
                    component: Ht
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: o.RELAX,
                    component: ft
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: o.EXIT,
                    component: Yt
                }))
            }

            function oa() {
                return r.a.createElement("div", {
                    className: "loading"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "logo"
                }, r.a.createElement("img", {
                    src: Wt,
                    alt: "ZA Challenge"
                })), r.a.createElement("div", {
                    className: "icon-loading"
                }, r.a.createElement("div", {
                    className: "loading-pulse"
                }))))
            }
            var ma = n(33),
                pa = n.n(ma);

            function fa(e) {
                if (e && "{" === e[0] && "}" === e[e.length - 1]) return JSON.parse(e);
                throw new Error("Invalid JSON")
            }

            function da(e) {
                return String.fromCharCode.apply(null, new Uint8Array(e))
            }

            function Ea(e) {
                for (var t = new ArrayBuffer(2 * e.length), n = new Uint8Array(t), a = 0, r = e.length; a < r; a++) n[a] = e.charCodeAt(a);
                return t
            }
            var ba = D;

            function va(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.operation,
                    r = void 0 === n ? ba.Operation.REGISTER : n,
                    c = Object(s.c)((function(e) {
                        return e.common.user
                    })),
                    u = Object(a.useState)(!1),
                    l = y()(u, 2),
                    i = l[0],
                    o = l[1],
                    m = Object(a.useState)(null),
                    p = y()(m, 2),
                    f = p[0],
                    d = p[1],
                    E = Object(a.useState)(null),
                    b = y()(E, 2),
                    v = b[0],
                    h = b[1],
                    g = Object(a.useState)(0),
                    O = y()(g, 2),
                    x = O[0],
                    S = O[1],
                    w = Object(a.useState)(!1),
                    N = y()(w, 2),
                    k = N[0],
                    C = N[1],
                    j = {
                        dev: function(e) {},
                        production: function(e) {
                            e && e()
                        },
                        env: function(e, t) {
                            "production" === e && t && t()
                        }
                    },
                    _ = j.dev,
                    T = Object(a.useRef)((function() {})),
                    I = Object(a.useRef)(),
                    A = Object(a.useRef)(),
                    D = function(e) {
                        T.current = e
                    },
                    P = function(e) {
                        S(e)
                    },
                    R = function() {
                        null != f && f.close()
                    },
                    L = function(e, t) {
                        var n = t.user,
                            a = t.operation,
                            r = t.message,
                            c = Ea(JSON.stringify({
                                operation: a,
                                message: r,
                                user: {
                                    id: n.id
                                }
                            }));
                        e.send(c)
                    },
                    M = function(e) {
                        null != f && i && L(f, e)
                    },
                    F = function(e, t) {
                        null != e && e.readyState === WebSocket.OPEN && (_((function() {
                            return console.log("PING!!!")
                        })), L(e, {
                            operation: ba.Operation.PING,
                            user: {
                                id: c.id
                            },
                            message: {
                                recipient: {
                                    token: t
                                },
                                body: "__ping__"
                            }
                        }), A.current = setTimeout((function() {
                            _((function() {
                                return console.log("PING timeout!!!")
                            })), I.current && clearInterval(I.current)
                        }), 1e4))
                    };
                return Object(a.useEffect)((function() {
                    if (!f && !k && x > 0 && r >= 0) {
                        var t = new WebSocket(e);
                        t.binaryType = "arraybuffer", t.addEventListener("open", (function() {
                            L(t, {
                                operation: r,
                                user: {
                                    id: c.id
                                },
                                message: {
                                    time: x
                                }
                            }), d(t)
                        })), t.addEventListener("close", (function(e) {
                            d(null), I.current && clearInterval(I.current)
                        })), t.addEventListener("error", (function(e) {
                            d(null), C(!0), I.current && clearInterval(I.current)
                        }))
                    }
                    return function() {
                        f && f.close()
                    }
                }), [f, x, k, e, r]), Object(a.useEffect)((function() {
                    f && f.addEventListener("message", (function(e) {
                        var t = fa(da(e.data));
                        switch (_((function() {
                                return console.log(t)
                            })), t.type) {
                            case ba.MessageType.REGISTER_OK:
                                t && t.recipient && t.recipient.token && (h(t.recipient.token), I.current = setInterval((function() {
                                    return F(f, t.recipient.token)
                                }), 15e5));
                                break;
                            case ba.MessageType.PONG:
                                t && "__pong__" === t.body && (_((function() {
                                    return console.log("PONG!!!, clear pingTimeout")
                                })), A.current && clearTimeout(A.current));
                                break;
                            default:
                                "function" === typeof T.current && T.current(t)
                        }
                    }))
                }), [f]), Object(a.useEffect)((function() {
                    if (f) switch (f.readyState) {
                        case WebSocket.OPEN:
                            o(!0);
                            break;
                        case WebSocket.CLOSED:
                            o(!1)
                    }
                }), [f]), Object(a.useEffect)((function() {
                    k && setTimeout((function() {
                        C(!1)
                    }), 5e3)
                }), [k]), {
                    token: v,
                    isSocketConnected: i,
                    addReceiveMessageListener: D,
                    setWSTime: P,
                    sendMessage: M,
                    disconnect: R
                }
            }
            var ha = D,
                ga = F;

            function ya(e) {
                var t = Object(s.b)(),
                    n = Object(a.useState)(-1),
                    r = y()(n, 2),
                    c = r[0],
                    u = r[1],
                    l = Object(s.c)((function(e) {
                        return e.common.user
                    })),
                    i = Object(s.c)((function(e) {
                        return e.test.submission
                    }));
                return Object(a.useEffect)((function() {
                        c >= 0 && l && i && e.isConnected && (e.send({
                            user: {
                                id: l.id
                            },
                            message: {
                                recipient: {
                                    id: ga.UserID
                                },
                                type: ha.MessageType.ZAC_LAYOUT_STATUS,
                                body: JSON.stringify({
                                    domain: i.domain,
                                    status: c
                                }),
                                time: (new Date).getTime()
                            },
                            operation: ha.Operation.SEND_MESSAGE_BY_RECIPIENT_ID
                        }), t(function(e) {
                            return {
                                type: V,
                                payload: e
                            }
                        }(c)))
                    }), [c, l, i, e.isConnected]),
                    function(e) {
                        u(e)
                    }
            }

            function Oa(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function xa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Oa(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oa(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Sa = D;

            function wa() {
                var e = va("wss://zalo.careers/test/ws", {
                        operation: Sa.Operation.ZAC_REGISTER
                    }),
                    t = e.isSocketConnected,
                    n = e.addReceiveMessageListener,
                    r = e.setWSTime,
                    c = e.sendMessage,
                    u = e.disconnect,
                    l = Object(a.useRef)({}),
                    i = Object(a.useRef)(!1),
                    o = Object(s.c)((function(e) {
                        return e.test.submission
                    })),
                    m = {
                        isConnected: t,
                        add: function(e, t) {
                            "undefined" !== typeof e && "function" === typeof t && (l.current = xa(xa({}, l.current), {}, A()({}, e, t)))
                        },
                        remove: function(e) {
                            l[e] && (l.current = xa(xa({}, l.current), {}, A()({}, e, void 0)))
                        },
                        send: c
                    },
                    p = ya(m);
                return m.sendLayoutStatus = p, Object(a.useEffect)((function() {
                    t ? (i.current = !0, n((function(e) {
                        if (e) {
                            var t = l.current[e.type];
                            "function" === typeof t && t(e)
                        }
                    }))) : i.current = !1
                }), [t]), Object(a.useEffect)((function() {
                    var e, t = null;
                    return !i.current && o && o.id > 0 && (e = o.time, r(e), t = u),
                        function() {
                            t && t()
                        }
                }), [o]), m
            }
            var Na = D;

            function ka() {
                var e = Object(s.c)((function(e) {
                    return e.common.loading
                }));
                return r.a.createElement(r.a.Fragment, null, e && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "fk-layer"
                }), r.a.createElement("div", {
                    className: "gl-loading"
                }, r.a.createElement("div", {
                    className: "gl-loading-wrap"
                }, r.a.createElement("svg", {
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "30px",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    style: {
                        enableBackground: "new 0 0 50 50"
                    },
                    xmlSpace: "preserve"
                }, r.a.createElement("rect", {
                    x: "0",
                    y: "0",
                    width: "6",
                    height: "10",
                    fill: "#0068ff"
                }, r.a.createElement("animateTransform", {
                    attributeType: "xml",
                    attributeName: "transform",
                    type: "scale",
                    values: "1,1; 1,3; 1,1",
                    begin: "0s",
                    dur: "0.6s",
                    repeatCount: "indefinite"
                })), r.a.createElement("rect", {
                    x: "10",
                    y: "0",
                    width: "6",
                    height: "10",
                    fill: "#0068ff"
                }, r.a.createElement("animateTransform", {
                    attributeType: "xml",
                    attributeName: "transform",
                    type: "scale",
                    values: "1,1; 1,3; 1,1",
                    begin: "0.2s",
                    dur: "0.6s",
                    repeatCount: "indefinite"
                })), r.a.createElement("rect", {
                    x: "20",
                    y: "0",
                    width: "6",
                    height: "10",
                    fill: "#0068ff"
                }, r.a.createElement("animateTransform", {
                    attributeType: "xml",
                    attributeName: "transform",
                    type: "scale",
                    values: "1,1; 1,3; 1,1",
                    begin: "0.4s",
                    dur: "0.6s",
                    repeatCount: "indefinite"
                })))))))
            }

            function Ca() {
                var e = ea();
                return r.a.createElement("div", {
                    className: "loading"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "logo"
                }, r.a.createElement("img", {
                    src: Wt,
                    alt: "ZA Challenge"
                })), r.a.createElement("span", {
                    className: "headline m-bottom-10 text-black"
                }, "T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\xe3 b\u1ecb v\xf4 hi\u1ec7u h\xf3a v\xe0 kh\xf4ng truy c\u1eadp \u0111\u01b0\u1ee3c b\xe0i test. Vui l\xf2ng li\xean h\u1ec7 ban t\u1ed5 ch\u1ee9c ho\u1eb7c", " ", r.a.createElement("a", {
                    href: "#!",
                    onClick: e
                }, "\u0111\u0103ng nh\u1eadp"), " ", "b\u1eb1ng m\u1ed9t t\xe0i kho\u1ea3n kh\xe1c")))
            }

            function ja(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function _a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ja(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ta = P;

            function Ia() {
                var e = Object(s.b)(),
                    t = Object(l.useHistory)(),
                    n = Object(s.c)((function(e) {
                        return e.test.submission
                    })),
                    r = Object(s.c)((function(e) {
                        return e.test.submissionId
                    })),
                    c = Object(a.useState)(!1),
                    u = y()(c, 2),
                    i = u[0],
                    m = u[1];

                function p() {
                    return (p = h()(x.a.mark((function t() {
                        var n;
                        return x.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 1, mt.get(r);
                                case 1:
                                    (n = t.sent) && e(Se(n));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                Object(a.useEffect)((function() {
                    r > 0 && function() {
                        p.apply(this, arguments)
                    }()
                }), [r]);

                function f(e) {
                    var n = t.location.pathname,
                        a = e.includes(n);
                    a || t.replace(e[0]), m(a)
                }
                return {
                    reroute: function() {
                        switch (n.status) {
                            case Ta.INIT:
                                f([o.COUNTDOWN]);
                                break;
                            case Ta.MULTIPLE_CHOICES:
                                f([o.MULTIPLE_CHOICES]);
                                break;
                            case Ta.IDLE:
                                f([o.RELAX]);
                                break;
                            case Ta.ESSAY:
                                f([o.ESSAY]);
                                break;
                            case Ta.DONE:
                                f([o.EXIT]);
                                break;
                            default:
                                f([o.COUNTDOWN])
                        }
                    },
                    nextStatus: function() {
                        var t = h()(x.a.mark((function t(a) {
                            var c, u, l;
                            return x.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (c = a.apiUpdate, u = 0, !(c && r > 0 && n.id > 0)) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.next = 1, mt.nextStatus(r);
                                    case 1:
                                        l = t.sent, u = l;
                                    case 2:
                                        return u && n.status < Ta.DONE && e(Se(_a(_a({}, n), {}, {
                                            status: u
                                        }))), t.abrupt("return", u);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    nextSection: function() {
                        var t = h()(x.a.mark((function t(a) {
                            var c, u, l;
                            return x.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (c = a.apiUpdate, u = null, !(c && r > 0 && n.id > 0)) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.next = 1, mt.nextSection(r);
                                    case 1:
                                        l = t.sent, u = l;
                                    case 2:
                                        return u && n.status < Ta.DONE && e(Ce(_a({}, u))), t.abrupt("return", u);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    isRouteValid: i,
                    isSubmissionFetched: n && n.id > 0
                }
            }

            function Aa(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Da(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Aa(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aa(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Pa = F,
                Ra = P;
            var La, Ma = function(e) {
                return function(t) {
                    var n = function() {
                        var e = Object(a.useState)({}),
                            t = y()(e, 2),
                            n = t[0],
                            r = t[1];
                        return {
                            start: function(e) {
                                var t = Date.now();
                                return r((function(n) {
                                    return Da(Da({}, n), {}, A()({}, e, t))
                                })), t
                            },
                            stop: function(e) {
                                if ("undefined" !== typeof n[e] && Object(Ct.isNumber)(n[e])) {
                                    var t = n[e];
                                    return r((function(t) {
                                        return Da(Da({}, t), {}, A()({}, e, void 0))
                                    })), Date.now() - t
                                }
                                return console.error("Can't find m_perf " + e), 0
                            }
                        }
                    }();
                    return r.a.createElement(e, pa()({
                        perfClient: n
                    }, t))
                }
            }(function(e) {
                return function(t) {
                    var n = Ia();
                    return r.a.createElement(e, pa()({
                        smClient: n
                    }, t))
                }
            }((La = function(e) {
                var t = e.wsClient,
                    n = e.smClient,
                    c = e.perfClient,
                    u = Object(s.c)((function(e) {
                        return e.common.user
                    })),
                    l = Object(s.c)((function(e) {
                        return e.common.session
                    })),
                    i = Object(a.useState)(!1),
                    o = y()(i, 2),
                    m = o[0],
                    p = o[1],
                    f = Object(a.useState)(!1),
                    d = y()(f, 2),
                    E = d[0],
                    b = d[1],
                    v = Object(s.b)(),
                    g = Object(a.useRef)(),
                    O = Object(a.useRef)(!1),
                    S = function() {
                        var e = Object(a.useState)(null),
                            t = y()(e, 2),
                            n = t[0],
                            r = t[1],
                            c = Object(a.useRef)(1),
                            u = Object(a.useState)(!1);
                        return {
                            startFetchInterval: function(e) {
                                var t = function() {
                                    var e = h()(x.a.mark((function e(t) {
                                        var a, l;
                                        return x.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!u.current) {
                                                        e.next = 1;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 1:
                                                    return e.prev = 1, u.current = !0, e.next = 2, an.v10.fetch(t);
                                                case 2:
                                                    if (!(a = e.sent)) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return clearInterval(n), r(a), e.abrupt("return", a);
                                                case 3:
                                                    e.next = 5;
                                                    break;
                                                case 4:
                                                    e.prev = 4, l = e.catch(1), console.error(l);
                                                case 5:
                                                    if (e.prev = 5, u.current = !1, c.current = ++c.current, !(c.current > 5)) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return console.error("Exceed number of retry fetch MultipleChoices: ", 5), clearInterval(n), e.abrupt("return");
                                                case 6:
                                                    return e.finish(5);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 4, 5, 7]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }();
                                t(e);
                                var n = setInterval(h()(x.a.mark((function n() {
                                    return x.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 1, t(e);
                                            case 1:
                                                return n.abrupt("return", n.sent);
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                }))), 1e4)
                            },
                            data: n
                        }
                    }(),
                    w = S.data,
                    N = S.startFetchInterval;

                function k() {
                    return (k = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, mt.load();
                                case 1:
                                    if ((t = e.sent).code !== We || _.isNil(t.data)) {
                                        e.next = 2;
                                        break
                                    }
                                    return v(we(t.data.smId)), e.abrupt("return", {
                                        smId: t.data.smId,
                                        currentSection: t.data.currentSection,
                                        isNewSm: t.data.isNewSm,
                                        status: t.data.status,
                                        code: t.code
                                    });
                                case 2:
                                    return e.abrupt("return", {
                                        smId: 0,
                                        isNewSm: !1,
                                        currentSection: null,
                                        code: Ke
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function C() {
                    return (C = h()(x.a.mark((function e(t) {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, an.v10.init(t);
                                case 1:
                                    return n = e.sent, v(ke(n)), e.abrupt("return", n);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function j() {
                    return (j = h()(x.a.mark((function e(t) {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, gt.init(t);
                                case 1:
                                    return n = e.sent, v(je(n)), e.abrupt("return", n);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return function(e) {
                    var t = Object(s.c)((function(e) {
                            return e.common.layoutStatus
                        })),
                        n = Object(s.c)((function(e) {
                            return e.common.user
                        })),
                        r = Object(s.c)((function(e) {
                            return e.test.submission
                        }));
                    Object(a.useEffect)((function() {
                        e.isConnected && n && r && e.add(Na.MessageType.ZAC_GET_DESK_LAYOUT_STATUS, (function(a) {
                            if (a) {
                                var c = a.body;
                                e.send({
                                    user: {
                                        id: n.id
                                    },
                                    message: {
                                        recipient: {
                                            token: c
                                        },
                                        type: Na.MessageType.ZAC_GET_DESK_LAYOUT_STATUS,
                                        body: JSON.stringify({
                                            domain: r.domain,
                                            status: t
                                        }),
                                        time: (new Date).getTime()
                                    },
                                    operation: Na.Operation.SEND_MESSAGE_BY_TOKEN
                                })
                            }
                        }))
                    }), [e.isConnected, t, n, r])
                }(t), Object(a.useEffect)((function() {
                    "off" === tt.TEST && (window.location.href = "/no-active-session")
                }), []), Object(a.useEffect)((function() {
                    n.reroute(), c.start("m_session")
                }), []), Object(a.useEffect)((function() {
                    w && v({
                        type: ge,
                        payload: {
                            multipleChoices: w
                        }
                    })
                }), [w]), Object(a.useEffect)((function() {
                    var e;

                    function t() {
                        return n.apply(this, arguments)
                    }

                    function n() {
                        return (n = h()(x.a.mark((function n() {
                            return x.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (u) {
                                            n.next = 1;
                                            break
                                        }
                                        return n.abrupt("return", new Promise((function(n, a) {
                                            Xn.login().then((function(e) {
                                                v(ye(e)), n(e)
                                            })).catch((function(n) {
                                                e = setTimeout(t, 3e3), a(n)
                                            }))
                                        })));
                                    case 1:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))).apply(this, arguments)
                    }
                    return t(),
                        function() {
                            return e && clearTimeout(e)
                        }
                }), [u]), Object(a.useEffect)((function() {
                    l && u && function() {
                        return k.apply(this, arguments)
                    }().then((function(e) {
                        var t = e.smId,
                            n = e.isNewSm,
                            a = e.currentSection,
                            r = e.code,
                            c = e.status;
                        if (r === Ve) return b(!0);
                        if (t > 0) {
                            if (p(!0), c === Ra.DONE) return;
                            ! function(e) {
                                j.apply(this, arguments)
                            }(t),
                            function(e) {
                                return C.apply(this, arguments)
                            }(t).then(function() {
                                var e = h()(x.a.mark((function e(r) {
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n && r && Array.from(r).forEach((function(e) {
                                                    var t = "zachallenge-".concat(e),
                                                        n = "zachallenge-marks-".concat(e);
                                                    kt.clearByPattern(t), kt.clearByPattern(n)
                                                })), N(t), v(Ce(a));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }
                    }))
                }), [l, u]), Object(a.useEffect)((function() {
                    return t.isConnected && !O.current && (O.current = !0), window.onbeforeunload = function() {
                            t.isConnected && t.sendLayoutStatus(Pa.Status.NOT_LOGGED_IN)
                        },
                        function() {
                            window.onbeforeunload = null
                        }
                }), [t.isConnected]), r.a.createElement(Rn, {
                    value: g
                }, r.a.createElement("div", {
                    className: "container",
                    ref: g,
                    tabIndex: 0
                }, m && n.isSubmissionFetched && u ? r.a.createElement(na, {
                    value: c
                }, r.a.createElement(Ue, {
                    value: n
                }, r.a.createElement(Le, {
                    value: t
                }, r.a.createElement(sa, null)))) : r.a.createElement(oa, null), E && r.a.createElement(Ca, null), r.a.createElement(ka, null)))
            }, function(e) {
                var t = wa();
                return r.a.createElement(La, pa()({
                    wsClient: t
                }, e))
            })));
            var Fa = Ma,
                Ua = {
                    loadGroups: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("layout", "groups"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    loadDesks: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("layout", "desks"), {
                                            params: {
                                                gr_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getAllDomainWithUploadedEssay: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("layout", "domain_with_uploaded"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getAllInactiveDomain: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("layout", "inactive_domain"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                };

            function qa(e) {
                var t = e.groups,
                    n = e.value,
                    a = e.onChange;
                return r.a.createElement(r.a.Fragment, null, t && t.length > 0 && r.a.createElement("select", {
                    value: n,
                    className: "el-select-desk-group el-select-desk-group-style",
                    onChange: a
                }, t.map((function(e) {
                    return r.a.createElement("option", {
                        key: e.id,
                        value: e.id
                    }, e.name)
                }))))
            }
            var Ba = F;

            function Ha(e) {
                var t = e.inactive,
                    n = void 0 !== t && t,
                    a = e.info,
                    c = e.status,
                    u = void 0 === c ? 0 : c;
                return r.a.createElement(r.a.Fragment, null, a ? r.a.createElement("div", {
                    className: "layout-cell-info-inner ".concat(n ? "inactive" : ""),
                    style: {
                        backgroundColor: function(e) {
                            if ("" === a.domain) return "#DAE1E3";
                            switch (e) {
                                case Ba.Status.NOT_LOGGED_IN:
                                    return "#DAE1E3";
                                case Ba.Status.READY:
                                    return "#B1B8B6";
                                case Ba.Status.DOING:
                                    return "#64F578";
                                case Ba.Status.QUANTITATIVE:
                                    return "#33eeff";
                                case Ba.Status.VERBAL:
                                    return "#f1ff33";
                                case Ba.Status.INTEGRATED:
                                    return "#b06bfa";
                                case Ba.Status.WRITING:
                                    return "#64F578";
                                case Ba.Status.OUT_FOCUS:
                                    return "#FE4455";
                                case Ba.Status.DONE:
                                    return "#0091FF";
                                default:
                                    return "#f5a742"
                            }
                        }(u)
                    }
                }, a.domain, u === Ba.Status.DONE && r.a.createElement("span", {
                    style: {
                        width: "9px",
                        height: "9px"
                    },
                    className: "dot"
                })) : r.a.createElement(r.a.Fragment, null, "\xa0"))
            }

            function Wa(e) {
                return jt.a.times(e, Number)
            }
            var Ya = Wa(80),
                za = Wa(80);

            function Ga(e) {
                var t = e.inactiveList,
                    n = void 0 === t ? [] : t,
                    c = e.statuses,
                    u = void 0 === c ? {} : c,
                    l = e.desks,
                    i = void 0 === l ? [] : l,
                    s = Object(a.useState)({}),
                    o = y()(s, 2),
                    m = o[0],
                    p = o[1];

                function f() {
                    return (f = h()(x.a.mark((function e() {
                        var t, n, a;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (t = {}, n = 0; n < i.length; n++) a = i[n].domain, t[a] = u[i[n].domain] || 0;
                                    p(t);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return Object(a.useEffect)((function() {
                    i && Array.isArray(i) && i.length > 0 && function() {
                        f.apply(this, arguments)
                    }()
                }), [i, u]), r.a.createElement("div", {
                    style: {
                        fontSize: "8px"
                    },
                    className: "layout-container"
                }, r.a.createElement("div", {
                    className: "layout-row"
                }, r.a.createElement("div", {
                    style: {
                        width: "16px",
                        height: "16px"
                    },
                    className: "layout-cell layout-header"
                }, "\xa0"), za.map((function(e) {
                    return r.a.createElement("div", {
                        style: {
                            width: "32px",
                            height: "16px"
                        },
                        className: "layout-cell layout-header",
                        key: e + 1
                    }, function(e) {
                        var t, n, a;
                        for (t = "", n = 1, a = 26;
                            (e -= n) >= 0; n = a, a *= 26) t = String.fromCharCode(parseInt(e % a / n) + 65) + t;
                        return t
                    }(e + 1))
                }))), Ya.map((function(e) {
                    return r.a.createElement("div", {
                        className: "layout-row",
                        key: e
                    }, r.a.createElement("div", {
                        style: {
                            width: "16px",
                            height: "16px"
                        },
                        className: "layout-cell layout-row-order"
                    }, e + 1))
                })), i.length > 0 && i.map((function(e, t) {
                    var a = function(e) {
                            return {
                                left: 32 * e.layoutCol + 16,
                                top: 16 * e.layoutRow + 16,
                                width: 32,
                                height: 16
                            }
                        }(e),
                        c = a.top,
                        u = a.left,
                        l = a.width,
                        i = a.height,
                        s = n && n.includes(e.domain);
                    return r.a.createElement("div", {
                        key: t,
                        style: {
                            top: c,
                            left: u,
                            width: l,
                            height: i
                        },
                        className: "layout-cell layout-cell-info"
                    }, r.a.createElement(Ha, {
                        inactive: s,
                        status: m[e.domain],
                        info: e
                    }))
                })))
            }

            function Za(e) {
                var t = e.onZoomIn,
                    n = e.onZoomOut;
                return r.a.createElement("div", {
                    className: "el-btn-zoom-group"
                }, r.a.createElement("button", {
                    className: "el-btn-zoom",
                    onClick: n
                }, "-"), r.a.createElement("button", {
                    className: "el-btn-zoom",
                    onClick: t
                }, "+"))
            }

            function Ka(e) {
                var t = e.children,
                    n = Object(a.useRef)(null);
                return Object(a.useLayoutEffect)((function() {
                    var e = n.current;
                    if (e) {
                        var t = function(e) {
                            e.touches.length > 1 && e.preventDefault()
                        };
                        return e.addEventListener("touchmove", t, {
                                passive: !1
                            }),
                            function() {
                                e.removeEventListener("touchmove", t)
                            }
                    }
                }), []), r.a.createElement("div", {
                    ref: n
                }, t)
            }

            function Va(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ja(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Va(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Va(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Qa = D,
                Xa = F;

            function $a() {
                var e = Object(a.useState)([]),
                    t = y()(e, 2),
                    n = t[0],
                    c = t[1],
                    u = Object(a.useState)({}),
                    i = y()(u, 2),
                    s = i[0],
                    o = i[1],
                    m = Object(a.useState)({}),
                    p = y()(m, 2),
                    f = p[0],
                    d = p[1],
                    E = Object(a.useState)({}),
                    b = y()(E, 2),
                    v = b[0],
                    g = b[1],
                    O = Object(a.useState)(1),
                    S = y()(O, 2),
                    w = S[0],
                    N = S[1],
                    k = Pe(),
                    C = {
                        dev: function(e) {},
                        production: function(e) {
                            e && e()
                        },
                        env: function(e, t) {
                            "production" === e && t && t()
                        }
                    }.dev,
                    j = Object(l.useParams)().groupId,
                    _ = Object(l.useHistory)(),
                    T = va("wss://zalo.careers/test/ws"),
                    I = T.token,
                    D = T.isSocketConnected,
                    P = T.addReceiveMessageListener,
                    R = T.setWSTime,
                    L = T.sendMessage,
                    M = Object(a.useState)(!1),
                    F = y()(M, 2),
                    U = F[0],
                    q = F[1],
                    B = Object(a.useState)(0),
                    H = y()(B, 2),
                    W = H[0],
                    Y = H[1];

                function z() {
                    return (z = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, Ua.getAllInactiveDomain();
                                case 1:
                                    (t = e.sent) && g(t);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function G() {
                    return (G = h()(x.a.mark((function e() {
                        var t, n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, Ua.getAllDomainWithUploadedEssay();
                                case 1:
                                    (t = e.sent) && Array.isArray(t) && (n = t.reduce((function(e, t) {
                                        return Ja(Ja({}, e), {}, A()({}, t, Xa.Status.DONE))
                                    }), {}), d((function(e) {
                                        return Ja(Ja({}, e), n)
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Z() {
                    return (Z = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, Ua.loadGroups();
                                case 1:
                                    (t = e.sent) && Array.isArray(t) && t.length > 0 && (c(t), Y(j || t[0].id));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return Object(a.useEffect)((function() {
                    ! function() {
                        Z.apply(this, arguments)
                    }(),
                    function() {
                        G.apply(this, arguments)
                    }(),
                    function() {
                        z.apply(this, arguments)
                    }(), R((new Date).getTime()), document.addEventListener("visibilitychange", (function() {
                        document.hidden ? console.log("Browser tab is hidden") : (console.log("Browser tab is visible"), window.location.reload())
                    }))
                }), []), Object(a.useEffect)((function() {
                    W > 0 && !s[W] && function(e) {
                        k(h()(x.a.mark((function t() {
                            var n;
                            return x.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 1, Ua.loadDesks(e);
                                    case 1:
                                        (n = t.sent) && Array.isArray(n) && n.length > 0 && o(Ja(Ja({}, s), {}, A()({}, e, n)));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))))
                    }(W)
                }), [W]), Object(a.useEffect)((function() {
                    if (U && I) {
                        var e = (new Date).getTime();
                        L({
                            user: {
                                id: Xa.UserID
                            },
                            message: {
                                recipient: {
                                    id: Xa.UserID
                                },
                                type: Qa.MessageType.ZAC_GET_DESK_LAYOUT_STATUS,
                                operation: Qa.Operation.ZAC_REGISTER,
                                body: I,
                                time: e
                            },
                            operation: Qa.Operation.SEND_MESSAGE_BY_OPERATION
                        }), q(!1)
                    }
                }), [U, I]), Object(a.useEffect)((function() {
                    D && q(!0)
                }), [D]), Object(a.useEffect)((function() {
                    D && P((function(e) {
                        if (e) {
                            C((function() {
                                return console.log(e)
                            }));
                            try {
                                var t = fa(e.body),
                                    n = t.domain,
                                    a = t.status;
                                d((function(e) {
                                    return Ja(Ja({}, e), {}, A()({}, n, a))
                                }))
                            } catch (r) {}
                        }
                    }))
                }), [D]), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "desk-layout-container"
                }, r.a.createElement("div", {
                    style: {
                        transform: "scale(".concat(w, ")")
                    },
                    className: "el-layout"
                }, r.a.createElement(Ga, {
                    inactiveList: v,
                    statuses: f,
                    desks: s[W]
                }))), r.a.createElement(Ka, null, r.a.createElement("div", {
                    className: "el-tools-group"
                }, r.a.createElement(qa, {
                    value: W,
                    groups: n,
                    onChange: function(e) {
                        var t = e.target.value;
                        Y(t), _.push("/layout/desks/".concat(t))
                    }
                }), r.a.createElement(Za, {
                    onZoomIn: function() {
                        N(w + .3)
                    },
                    onZoomOut: function() {
                        var e = w - .3;
                        e < 1 && (e = 1), N(e)
                    }
                }))))
            }

            function er() {
                return r.a.createElement(l.Switch, null, r.a.createElement(l.Route, {
                    exact: !0,
                    path: "".concat(m.DESKS),
                    component: $a
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: "".concat(m.DESKS, "/:groupId"),
                    component: $a
                }))
            }
            n(521);
            var tr = F;
            var nr = function() {
                var e = Object(s.b)(),
                    t = Object(s.c)((function(e) {
                        return e.common.user
                    }));
                return Object(a.useEffect)((function() {
                    "off" === tt.LAYOUT && (window.location.href = "/no-active-session")
                }), []), Object(a.useEffect)((function() {
                    t || e(ye({
                        id: tr.UserID
                    }))
                }), [t]), r.a.createElement(r.a.Fragment, null, r.a.createElement(er, null), r.a.createElement(ka, null))
            };

            function ar(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function rr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ar(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var cr = {
                    check: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("examine", "check"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    loadEssays: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("examine", "load_essays"), {
                                            params: {
                                                ex_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getEssay: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("examine", "get_essay"), {
                                            params: {
                                                es_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    score: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("examine", "score"), rr({
                                            es_id: t
                                        }, n));
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 3;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        if (r.code !== Ye) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error(r.data);
                                    case 3:
                                        return e.abrupt("return", null);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    loadEssayFile: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("examine", "load_essay_file"), {
                                            params: {
                                                es_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    updateNotes: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("examine", "update_notes"), {
                                            es_id: t,
                                            notes: n
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 3;
                                            break
                                        }
                                        if (console.log(a), (r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        if (r.code !== Ye) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error(r.data);
                                    case 3:
                                        return e.abrupt("return", null);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                ur = localStorage.getItem("zahub_theme") || "light",
                lr = "dark" === ur;

            function ir(e, t, n) {
                return e + " " + ("light" === ur ? t : n)
            }
            document.querySelectorAll("body, html").forEach((function(e) {
                e.style.backgroundColor = lr ? "#4a5568" : "#f8f9fc"
            }));
            var sr = n(16),
                or = n(18);

            function mr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function pr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mr(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function fr(e) {
                var t = e.children,
                    n = e.showBackButton,
                    a = void 0 !== n && n,
                    c = e.style,
                    u = void 0 === c ? {} : c,
                    l = e.onBack,
                    i = e.className;
                return r.a.createElement("div", {
                    style: pr({}, u),
                    className: "exm-content ".concat(i)
                }, a && r.a.createElement("div", {
                    className: "underline cursor-pointer mb-2 inline-block",
                    onClick: l
                }, r.a.createElement(or.a, {
                    icon: sr.a,
                    className: "mr-1"
                }), " Back"), t)
            }
            var dr = U;

            function Er(e) {
                var t = e.status;
                return r.a.createElement(r.a.Fragment, null, t === dr.WAIT_FOR_DH_SCORE && r.a.createElement(Mt.Tag, {
                    type: "warning"
                }, "Wait for DH score"), t === dr.SCORED && r.a.createElement(Mt.Tag, {
                    type: "success"
                }, "Scored"), t === dr.DH_SCORED && r.a.createElement(Mt.Tag, {
                    type: "success"
                }, "DH Scored"), t === dr.WAIT_FOR_CALIBRATE && r.a.createElement(Mt.Tag, {
                    type: "primary"
                }, "Not Calibrated"), t === dr.CALIBRATED && r.a.createElement(Mt.Tag, {
                    type: "success"
                }, "Calibrated"), t === dr.INIT && r.a.createElement(Mt.Tag, {
                    type: "gray"
                }, "Init"))
            }
            var br = ["className", "noResponsive", "children"],
                vr = ["className", "children", "orderField", "orderParams", "onOrder"],
                hr = ["head", "className", "children"];

            function gr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function yr(e) {
                var t = e.className,
                    n = e.noResponsive,
                    a = e.children,
                    c = Lt()(e, br);
                return r.a.createElement("div", {
                    className: t + " w-full " + (n ? "" : "overflow-auto")
                }, r.a.createElement("table", pa()({
                    className: ir("w-full rounded border ", "", "border-gray-600")
                }, c), a))
            }

            function Or(e) {
                var t, n = e.className,
                    a = e.children,
                    c = e.orderField,
                    u = e.orderParams,
                    l = e.onOrder,
                    i = Lt()(e, vr);
                return u && c && (t = u[c]), r.a.createElement("th", pa()({
                    className: ir("text-left py-3 px-2 text-white text-sm " + (n || ""), "bg-blue-750", "bg-blue-800")
                }, i), c ? r.a.createElement("div", {
                    className: "flex items-center cursor-pointer",
                    onClick: function(e) {
                        var t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? gr(Object(n), !0).forEach((function(t) {
                                    A()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, u);

                        function n() {
                            var e, n = q.ASC;
                            c in t ? (e = t[c].order, n = t[c].value === q.ASC ? q.DESC : q.ASC) : (e = t.__maxOrder, t.__maxOrder = e + 1), t[c] = {
                                value: n,
                                order: e
                            }
                        }
                        e.ctrlKey || e.altKey ? e.altKey ? function() {
                            if (c in t) {
                                var e = t[c];
                                for (var n in delete t[c], t.__maxOrder -= 1, t) "__maxOrder" !== n && t[n].order > e.order && (t[n].order -= 1)
                            }
                        }() : n() : (c in t ? (t = A()({}, c, {
                            value: t[c].value,
                            order: 0
                        })).__maxOrder = 1 : (t = {}).__maxOrder = 0, n()), l(t)
                    },
                    title: "Click: to sort results by this column, \nCtrl + Click: to sort results by multiple columns, \nAlt + Click: to remove sorted by this column."
                }, r.a.createElement("span", {
                    className: "underline"
                }, a), t && r.a.createElement("span", {
                    className: "ml-2 text-xs"
                }, r.a.createElement(Mt.Icon, {
                    name: t.value === q.ASC ? "caret-top" : "caret-bottom"
                }), " ", t.order + 1)) : a)
            }
            yr.Column = function(e) {
                var t = e.head,
                    n = e.className,
                    a = e.children,
                    c = Lt()(e, hr);
                return t ? r.a.createElement(Or, pa()({
                    className: n
                }, c), a) : r.a.createElement("td", pa()({
                    className: ir("py-2 px-2  border-b text-sm border-gray-200" + (n || ""), "", "border-gray-600")
                }, c), a)
            };
            var xr = n(34);

            function Sr(e) {
                var t = e.value,
                    n = e.onClear,
                    c = e.onSearch,
                    u = e.placeholder,
                    l = e.className,
                    i = Object(a.useState)(t),
                    s = y()(i, 2),
                    o = s[0],
                    m = s[1];
                return r.a.createElement("form", {
                    className: "relative clearable-input ".concat(l),
                    onSubmit: function(e) {
                        e.preventDefault(), c && c(o, e)
                    }
                }, r.a.createElement(Mt.Input, {
                    className: ir("", "", "darkmode text-white-i"),
                    onChange: m,
                    placeholder: u,
                    value: o,
                    append: r.a.createElement(Mt.Button, {
                        type: "primary",
                        className: ir("hover:text-primary-i", "", "darkmode text-gray-300"),
                        icon: "search",
                        nativeType: "submit"
                    }, r.a.createElement("span", {
                        className: "hidden md:inline"
                    }, "Search"))
                }), t && r.a.createElement("span", {
                    className: "close-search close-btn cursor-pointer absolute text-gray-400 hover:text-gray-500",
                    style: {
                        top: "7px"
                    },
                    onClick: function() {
                        m(""), n && n()
                    }
                }, r.a.createElement(Mt.Icon, {
                    name: "circle-close"
                })))
            }
            var wr = U,
                Nr = function(e) {
                    switch (e) {
                        case wr.WAIT_FOR_DH_SCORE:
                            return "Not scored";
                        case wr.DH_SCORED:
                            return "Scored";
                        case wr.WAIT_FOR_CALIBRATE:
                            return "Not Calibrated";
                        case wr.CALIBRATED:
                            return "Calibrated";
                        case wr.INIT:
                            return "Init";
                        default:
                            return ""
                    }
                };
            n(522);
            var kr = function(e) {
                var t = e.text,
                    n = void 0 === t ? "" : t,
                    a = e.onClick;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(Mt.Tooltip, {
                    placement: "bottom",
                    content: "read more"
                }, r.a.createElement("p", {
                    onClick: a,
                    className: "read-more-text"
                }, n)))
            };
            var Cr = function(e) {
                    var t = e.visible,
                        n = e.onClose,
                        a = e.children,
                        c = e.title,
                        u = e.showSubmit,
                        l = void 0 !== u && u,
                        i = e.onSubmit,
                        s = e.size,
                        o = void 0 === s ? "tiny" : s,
                        m = e.cancelText,
                        p = void 0 === m ? "Cancel" : m,
                        f = e.submitText,
                        d = void 0 === f ? "Submit" : f,
                        E = e.showControlButtons,
                        b = void 0 !== E && E;
                    return r.a.createElement(Mt.Dialog, {
                        title: c,
                        size: o,
                        visible: t,
                        onCancel: n,
                        lockScroll: !1
                    }, r.a.createElement(Mt.Dialog.Body, null, a), b && r.a.createElement(Mt.Dialog.Footer, {
                        className: "dialog-footer"
                    }, r.a.createElement(Mt.Button, {
                        onClick: n
                    }, p), l && r.a.createElement(Mt.Button, {
                        type: "primary",
                        onClick: i
                    }, d)))
                },
                jr = function(e, t) {
                    var n = [],
                        a = "",
                        c = {},
                        u = [];
                    try {
                        c = JSON.parse(t.notes), "dh" === e ? n = c.dhScoredDetail.split(";").map((function(e) {
                            return +e
                        })) : "cal" === e && (n = c.calibratorScoredDetail.split(";").map((function(e) {
                            return +e
                        }))), a = r.a.createElement("p", {
                            style: {
                                lineHeight: "30px"
                            }
                        }, "Define Problem: ", n[0], "\u0111", r.a.createElement("br", null), "Action Plan - Personal: ", n[1], "\u0111", r.a.createElement("br", null), "Action Plan - Corporate: ", n[2], "\u0111", r.a.createElement("br", null), "Bonus: ", n[3], "\u0111")
                    } catch (l) {}
                    try {
                        "dh" === e && c.dhNotes ? u = JSON.parse(c.dhNotes) : "cal" === e && c.calibratorNotes && (u = JSON.parse(c.calibratorNotes))
                    } catch (l) {}
                    return {
                        scoredDetailText: a || "",
                        scoredDetail: n || [],
                        notes: c || {},
                        highlights: u || []
                    }
                };

            function _r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Tr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _r(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ir = 1;

            function Ar() {
                Object(l.useHistory)();
                var e = Object(s.b)(),
                    t = Object(s.c)((function(e) {
                        return e.examine.examinerId
                    })),
                    n = Object(s.c)((function(e) {
                        return e.examine.isCalibrator
                    })),
                    c = Object(s.c)((function(e) {
                        return e.examine.calibratedEssays
                    })),
                    u = Object(s.c)((function(e) {
                        return e.examine.filterConfig
                    })),
                    i = Object(a.useState)([]),
                    o = y()(i, 2),
                    m = o[0],
                    p = o[1],
                    f = Object(a.useState)([]),
                    d = y()(f, 2),
                    E = d[0],
                    b = d[1],
                    v = Object(a.useState)([]),
                    g = y()(v, 2),
                    O = g[0],
                    S = g[1],
                    w = Object(a.useState)({
                        field: null,
                        type: null
                    }),
                    N = y()(w, 2),
                    C = N[0],
                    j = N[1],
                    _ = Pe(),
                    T = Object(a.useState)({
                        page: 1,
                        limit: 25,
                        pageSize: 1
                    }),
                    I = y()(T, 2),
                    A = I[0],
                    D = I[1],
                    P = Object(a.useState)(""),
                    R = y()(P, 2),
                    L = R[0],
                    M = R[1],
                    F = Object(a.useState)(""),
                    U = y()(F, 2),
                    B = U[0],
                    H = U[1],
                    W = Object(a.useState)(""),
                    Y = y()(W, 2),
                    z = Y[0],
                    G = Y[1],
                    Z = Object(a.useState)(Ir),
                    K = y()(Z, 2),
                    V = K[0],
                    J = K[1],
                    Q = Object(a.useState)(),
                    X = y()(Q, 2),
                    $ = X[0],
                    ee = X[1],
                    te = Object(a.useState)(!1),
                    ne = y()(te, 2),
                    ae = ne[0],
                    re = ne[1],
                    ce = Object(a.useRef)();
                Object(a.useEffect)((function() {
                    u.searchQuery && M(u.searchQuery), u.selectedDept && H(u.selectedDept), u.filterType && J(u.filterType)
                }), []), Object(a.useEffect)((function() {
                    !ce.current && ie(!0)
                }), []), Object(a.useEffect)((function() {
                    t >= 0 && !ce.current && ie(!1)
                }), [t, n]), Object(a.useEffect)((function() {
                    p((function(e) {
                        return k()(e.sort((function(e, t) {
                            var n = e[C.field] || 0,
                                a = t[C.field] || 0;
                            return C.value === q.ASC ? n - a : a - n
                        })))
                    }))
                }), [C]), Object(a.useEffect)((function() {
                    e({
                        type: he,
                        payload: {
                            selectedDept: B,
                            searchQuery: L,
                            filterType: V
                        }
                    })
                }), [B, L, V]);
                var ue = Object(a.useMemo)((function() {
                        var e;
                        return e = L.trim() ? k()(m.filter((function(e) {
                            return String(e.domain).toLowerCase().includes(String(L).toLowerCase())
                        }))) : k()(m), B.trim() && (e = e.filter((function(e) {
                            return String(B).toLowerCase() === String(e.zadeptName || "").toLowerCase()
                        }))), z && (e = e.filter((function(e) {
                            return e.examiningStatus === z
                        }))), D((function(e) {
                            return Tr(Tr({}, e), {}, {
                                page: 1
                            })
                        })), e
                    }), [m, L, B, z]),
                    le = Object(a.useMemo)((function() {
                        var e = (A.page - 1) * A.limit;
                        return ue.slice(e, e + A.limit)
                    }), [A, ue]);

                function ie(e) {
                    return se.apply(this, arguments)
                }

                function se() {
                    return (se = h()(x.a.mark((function a(r) {
                        return x.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    _(h()(x.a.mark((function a() {
                                        var u;
                                        return x.a.wrap((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    if (ce.current = !0, !(!r && n && Object.keys(c).length > 0)) {
                                                        a.next = 1;
                                                        break
                                                    }
                                                    u = k()(c), a.next = 3;
                                                    break;
                                                case 1:
                                                    return a.next = 2, cr.loadEssays(t);
                                                case 2:
                                                    u = a.sent;
                                                case 3:
                                                    u && (oe(u), p(u), n && (e(De(k()(u))), b(u.map((function(e) {
                                                        return e.zadeptName
                                                    })).filter((function(e) {
                                                        return !!e && e.trim()
                                                    })).filter((function(e, t, n) {
                                                        return n.indexOf(e) === t
                                                    }))), S(u.map((function(e) {
                                                        return e.examiningStatus
                                                    })).filter((function(e) {
                                                        return !!e && e
                                                    })).filter((function(e, t, n) {
                                                        return n.indexOf(e) === t
                                                    }))))), ce.current = !1;
                                                case 4:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), a)
                                    }))));
                                case 1:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))).apply(this, arguments)
                }

                function oe(e) {
                    var t = {};
                    e.forEach((function(e) {
                        t[e.id] = {
                            nextEssayId: e.nextEssayId,
                            prevEssayId: e.prevEssayId
                        }
                    })), localStorage.setItem("NEXT_AND_PREV_IDS", JSON.stringify(t))
                }

                function me(e) {
                    return function(t) {
                        ee(t);
                        var n = t[e];
                        j({
                            field: e,
                            value: n.value
                        })
                    }
                }
                return Object(a.useEffect)((function() {
                    var e = Math.floor(ue.length / A.limit);
                    e = 0 === (e += ue.length % A.limit > 0 ? 1 : 0) ? 1 : e, D((function(t) {
                        return Tr(Tr({}, t), {}, {
                            pageSize: e
                        })
                    }))
                }), [ue]), r.a.createElement(fr, {
                    className: "main-container essay-list"
                }, r.a.createElement("div", {
                    className: "d-flex flex-row justify-content-between"
                }, r.a.createElement("h4", {
                    className: "text-xl font-bold"
                }, "List of Essays"), r.a.createElement(Mt.Button, {
                    className: ir("", "", "bg-green-700 hover:bg-green-600"),
                    type: "success",
                    onClick: function() {
                        return ie(!0)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.o,
                    className: "mr-1"
                }), " Refresh data")), r.a.createElement("hr", {
                    className: "mb-6 mt-2"
                }), n && r.a.createElement("div", {
                    className: "flex flex-wrap mb-4"
                }, r.a.createElement("div", {
                    className: "w-1/2 sm:w-1/3 mt-2 pr-2"
                }, r.a.createElement(Mt.Select, {
                    value: "",
                    clearable: !0,
                    className: ir("w-full", "", "darkmode text-white"),
                    placeholder: "Filter by ZA Dept...",
                    onChange: function(e) {
                        return H(e)
                    }
                }, E.map((function(e, t) {
                    return r.a.createElement(Mt.Select.Option, {
                        key: t,
                        value: e,
                        label: e
                    })
                })))), r.a.createElement("div", {
                    className: "w-1/2 sm:w-1/3 mt-2"
                }, r.a.createElement(Mt.Select, {
                    value: "",
                    clearable: !0,
                    className: ir("w-full", "", "darkmode text-white"),
                    placeholder: "Filter by Status...",
                    onChange: function(e) {
                        return G(e)
                    }
                }, O.map((function(e, t) {
                    return r.a.createElement(Mt.Select.Option, {
                        key: t,
                        value: e,
                        label: Nr(e)
                    })
                }))))), function() {
                    var e = A.page,
                        t = A.limit,
                        n = (e - 1) * t,
                        a = n + t;
                    return a = a > ue.length ? ue.length : a, r.a.createElement("p", {
                        className: "text-sm pb-3 text-gray-700"
                    }, "Show", " ", r.a.createElement("b", null, n + 1, " - ", a), " ", "/ ", r.a.createElement("b", null, ue.length), " items")
                }(), r.a.createElement(yr, {
                    className: "table-wrapper"
                }, r.a.createElement("thead", null, n ? r.a.createElement("tr", null, r.a.createElement(yr.Column, {
                    head: !0
                }, "#"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Name"), r.a.createElement(yr.Column, {
                    head: !0,
                    orderField: "scores",
                    orderParams: $,
                    onOrder: me("scores")
                }, "Scores"), r.a.createElement(yr.Column, {
                    head: !0,
                    orderField: "calibratedScores",
                    orderParams: $,
                    onOrder: me("calibratedScores")
                }, "Calibrated Scores"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Score details"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Comment"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Status"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Updated at")) : r.a.createElement("tr", null, r.a.createElement(yr.Column, {
                    head: !0
                }, "#"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Name"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Scores"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Score details"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Status"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Comment"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Updated at"))), r.a.createElement("tbody", null, le.map((function(e, t) {
                    return n ? function(e, t) {
                        var n = (A.page - 1) * A.limit;
                        console.log(jr);
                        var a = jr("cal", e).scoredDetailText;
                        return r.a.createElement("tr", {
                            className: ir("", "hover:bg-gray-200", "hover:bg-gray-700"),
                            key: e.id
                        }, r.a.createElement(yr.Column, null, t + n + 1), r.a.createElement(yr.Column, null, r.a.createElement(xr.a, {
                            className: "text-primary underline",
                            to: "/examine/essays/".concat(e.id)
                        }, "ZA Essay ", e.id)), r.a.createElement(yr.Column, null, e.scores / 10), r.a.createElement(yr.Column, null, e.calibratedScores / 10), r.a.createElement(yr.Column, null, r.a.createElement(kr, {
                            onClick: function() {
                                return re({
                                    text: a,
                                    title: "Score detail"
                                })
                            },
                            text: a
                        })), r.a.createElement(yr.Column, null, r.a.createElement(kr, {
                            onClick: function() {
                                return re({
                                    text: e.comment,
                                    title: "Comment"
                                })
                            },
                            text: e.comment
                        })), r.a.createElement(yr.Column, null, r.a.createElement(Er, {
                            status: e.examiningStatus
                        })), r.a.createElement(yr.Column, null, Nt()(e.updatedAt).format("DD/MM/YYYY HH:mm")))
                    }(e, t) : function(e, t) {
                        var n = (A.page - 1) * A.limit,
                            a = jr("dh", e).scoredDetailText;
                        return r.a.createElement("tr", {
                            key: e.id
                        }, r.a.createElement(yr.Column, null, t + n + 1), r.a.createElement(yr.Column, null, r.a.createElement(xr.a, {
                            className: "text-primary underline",
                            to: "/examine/essays/".concat(e.id)
                        }, "ZA Essay ", e.id)), r.a.createElement(yr.Column, null, e.scores / 10), r.a.createElement(yr.Column, null, r.a.createElement(kr, {
                            onClick: function() {
                                return re({
                                    text: a,
                                    title: "Score detail"
                                })
                            },
                            text: a
                        })), r.a.createElement(yr.Column, null, r.a.createElement(Er, {
                            status: e.examiningStatus
                        })), r.a.createElement(yr.Column, null, r.a.createElement(kr, {
                            onClick: function() {
                                return re({
                                    text: e.comment,
                                    title: "Comment"
                                })
                            },
                            text: e.comment
                        })), r.a.createElement(yr.Column, null, Nt()(e.updatedAt).format("DD/MM/YYYY HH:mm")))
                    }(e, t)
                })))), r.a.createElement("div", {
                    className: "flex justify-center mt-5"
                }, r.a.createElement(Mt.Pagination, {
                    layout: "prev, pager, next",
                    className: ir("", "", "darkmode"),
                    total: ue.length,
                    pageSize: A.limit,
                    currentPage: A.page ? Number(A.page) : 1,
                    onCurrentChange: function(e) {
                        var t = A.page,
                            n = A.pageSize;
                        t === e || e < 1 || e > n || D((function(t) {
                            return Tr(Tr({}, t), {}, {
                                page: e
                            })
                        }))
                    }
                })), ae && r.a.createElement(Cr, {
                    visible: ae.text,
                    onClose: function() {
                        re()
                    },
                    title: ae.title,
                    size: "tiny"
                }, r.a.createElement("div", {
                    style: {
                        whiteSpace: "pre-line"
                    }
                }, ae.text)))
            }
            var Dr = n(65),
                Pr = (n(542), n(118)),
                Rr = n(190),
                Lr = n.n(Rr),
                Mr = n(119),
                Fr = n.n(Mr),
                Ur = n(191),
                qr = n.n(Ur);
            n(545);

            function Br(e, t, n) {
                return t = Fr()(t), Lr()(e, function() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                    } catch (e) {}
                    return function() {
                        return !!e
                    }()
                }() ? Reflect.construct(t, n || [], Fr()(e).constructor) : t.apply(e, n))
            }
            var Hr = function(e) {
                    function t(e) {
                        var n;
                        return Ot()(this, t), (n = Br(this, t, [e])).state = {
                            compact: !0,
                            text: "",
                            emoji: ""
                        }, n
                    }
                    return qr()(t, e), St()(t, [{
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            var n = this.props.onUpdate;
                            n && this.state.compact !== t.compact && n()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.onConfirm,
                                a = t.onOpen,
                                c = this.state,
                                u = c.compact,
                                l = c.text,
                                i = c.emoji;
                            return r.a.createElement("div", {
                                className: "Tip"
                            }, u ? r.a.createElement("div", {
                                className: "Tip__compact",
                                onClick: function() {
                                    a(), e.setState({
                                        compact: !1
                                    })
                                }
                            }, "Add highlight") : r.a.createElement("form", {
                                className: "Tip__card",
                                onSubmit: function(e) {
                                    e.preventDefault(), n({
                                        text: l,
                                        emoji: i
                                    })
                                }
                            }, r.a.createElement("div", null, r.a.createElement("textarea", {
                                placeholder: "Your comment",
                                autoFocus: !0,
                                value: l,
                                onChange: function(t) {
                                    return e.setState({
                                        text: t.target.value
                                    })
                                },
                                ref: function(e) {
                                    e && e.focus()
                                }
                            })), r.a.createElement("div", null, r.a.createElement("input", {
                                type: "submit",
                                value: "Save"
                            }))))
                        }
                    }])
                }(a.Component),
                Wr = ["id", "position", "content"];

            function Yr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function zr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Yr(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Gr = function(e) {
                    var t = e.pdfUrl,
                        n = e.notes,
                        c = e.onError,
                        u = e.onSave,
                        l = e.onChange,
                        i = Object(a.useState)(n || []),
                        s = y()(i, 2),
                        o = s[0],
                        m = s[1],
                        p = Object(a.useState)(),
                        f = y()(p, 2),
                        d = f[0],
                        E = f[1],
                        b = Object(a.useState)(!1),
                        v = y()(b, 2),
                        h = v[0],
                        g = v[1],
                        O = Object(Pr.b)();
                    Object(a.useEffect)((function() {
                        d && c && c("Fail to fetch Essay file")
                    }), [d]);
                    var x = Object(a.useCallback)((function(e, t) {
                        g(e), console.log("Screen 1 went to", e, t)
                    }), [O]);
                    return r.a.createElement(Pr.a, {
                        handle: O,
                        onChange: x
                    }, r.a.createElement("div", {
                        className: "pdf-highlighter ".concat(h ? "expanding" : "")
                    }, r.a.createElement(Dr.d, {
                        url: t,
                        beforeLoad: r.a.createElement(Kr, null),
                        onError: E
                    }, (function(e) {
                        return r.a.createElement(Dr.c, {
                            pdfDocument: e,
                            enableAreaSelection: function(e) {
                                return e.altKey
                            },
                            scrollRef: function(e) {},
                            onSelectionFinished: function(e, t, n, a) {
                                return r.a.createElement(Hr, {
                                    onOpen: a,
                                    onConfirm: function(a) {
                                        ! function(e) {
                                            console.log("Saving highlight", e);
                                            var t = [zr(zr({}, e), {}, {
                                                id: String(Math.random()).slice(2)
                                            })].concat(k()(o));
                                            u && u(t), l && l(), m(t)
                                        }({
                                            content: t,
                                            position: e,
                                            comment: a
                                        }), n()
                                    }
                                })
                            },
                            highlightTransform: function(e, t, n, a, c, i, s) {
                                var p = !Boolean(e.content && e.content.image) ? r.a.createElement(Dr.b, {
                                    isScrolledTo: s,
                                    position: e.position,
                                    comment: e.comment
                                }) : r.a.createElement(Dr.a, {
                                    isScrolledTo: s,
                                    highlight: e,
                                    onChange: function(t) {
                                        ! function(e, t, n) {
                                            console.log("Updating highlight", e, t, n);
                                            var a = o.map((function(a) {
                                                var r = a.id,
                                                    c = a.position,
                                                    u = a.content,
                                                    l = Lt()(a, Wr);
                                                return r === e ? zr({
                                                    id: r,
                                                    position: zr(zr({}, c), t),
                                                    content: zr(zr({}, u), n)
                                                }, l) : a
                                            }));
                                            m(a)
                                        }(e.id, {
                                            boundingRect: c(t)
                                        }, {
                                            image: i(t)
                                        })
                                    }
                                });
                                return r.a.createElement(Dr.e, {
                                    popupContent: r.a.createElement(Zr, pa()({}, e, {
                                        onDeleteNote: function() {
                                            return function(e) {
                                                var t = o.filter((function(t) {
                                                    return t.id !== e.id
                                                }));
                                                m(t), u && u(t), l && l()
                                            }(e)
                                        }
                                    })),
                                    onMouseOver: function(t) {
                                        return n(e, (function(e) {
                                            return t
                                        }))
                                    },
                                    onMouseOut: a,
                                    key: t,
                                    children: p
                                })
                            },
                            highlights: o
                        })
                    })), h ? r.a.createElement("div", {
                        className: "expand-btn",
                        onClick: function() {
                            O.exit()
                        }
                    }, r.a.createElement(or.a, {
                        icon: sr.d
                    })) : r.a.createElement("div", {
                        className: "expand-btn",
                        onClick: function() {
                            O.enter()
                        }
                    }, r.a.createElement(or.a, {
                        icon: sr.f
                    }))))
                },
                Zr = function(e) {
                    var t = e.comment,
                        n = e.onDeleteNote;
                    return t.text ? r.a.createElement("div", {
                        className: "Highlight__popup"
                    }, r.a.createElement(or.a, {
                        className: "delete-btn",
                        icon: sr.c,
                        onClick: n
                    }), r.a.createElement("p", {
                        style: {
                            whiteSpace: "pre-wrap"
                        }
                    }, t.text)) : null
                },
                Kr = function() {
                    return r.a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            height: "100vh"
                        }
                    }, r.a.createElement("div", {
                        className: "sk-fading-circle"
                    }, r.a.createElement("div", {
                        className: "sk-circle1 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle2 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle3 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle4 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle5 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle6 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle7 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle8 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle9 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle10 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle11 sk-circle"
                    }), r.a.createElement("div", {
                        className: "sk-circle12 sk-circle"
                    })))
                };
            n(546), n(547);

            function Vr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Jr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vr(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Qr = U,
                Xr = {
                    painNOpportunity: [{
                        validator: function(e, t, n) {
                            var a = parseFloat(t, 10);
                            a < 0 || a > 3 ? n(new Error("\u0110i\u1ec3m kh\xf4ng h\u1ee3p l\u1ec7")) : n()
                        },
                        trigger: "blur"
                    }],
                    planNPersonal: [{
                        validator: function(e, t, n) {
                            var a = parseFloat(t, 10);
                            a < 0 || a > 2 ? n(new Error("\u0110i\u1ec3m kh\xf4ng h\u1ee3p l\u1ec7")) : n()
                        },
                        trigger: "blur"
                    }],
                    planNCorporate: [{
                        validator: function(e, t, n) {
                            var a = parseFloat(t, 10);
                            a < 0 || a > 4 ? n(new Error("\u0110i\u1ec3m kh\xf4ng h\u1ee3p l\u1ec7")) : n()
                        },
                        trigger: "blur"
                    }],
                    bonus: [{
                        validator: function(e, t, n) {
                            var a = parseFloat(t, 10);
                            a < 0 || a > 1 ? n(new Error("\u0110i\u1ec3m kh\xf4ng h\u1ee3p l\u1ec7")) : n()
                        },
                        trigger: "blur"
                    }]
                };

            function $r() {
                var e = Object(l.useHistory)(),
                    t = (Object(s.b)(), Object(l.useParams)().id),
                    n = Object(a.useState)({}),
                    c = y()(n, 2),
                    u = c[0],
                    i = c[1],
                    o = Object(a.useState)(!1),
                    m = y()(o, 2),
                    p = m[0],
                    f = m[1],
                    d = Object(s.c)((function(e) {
                        return e.examine.isCalibrator
                    })),
                    E = Object(a.useState)({}),
                    b = y()(E, 2),
                    v = b[0],
                    g = b[1],
                    O = Object(a.useState)(),
                    S = y()(O, 2),
                    w = (S[0], S[1]),
                    N = Object(l.useLocation)(),
                    k = new URLSearchParams(N.search),
                    C = k.get("nextId"),
                    j = k.get("prevId");
                console.log(t, C, j);
                var _ = Object(a.useRef)();

                function T() {
                    return (T = h()(x.a.mark((function e(t) {
                        var n, a, r, c, u;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, cr.getEssay(t);
                                case 1:
                                    n = e.sent;
                                    try {
                                        a = null, (a = jr(d ? "cal" : "dh", n)) && (n.notes = a.highlights, r = {}, c = a.scoredDetail, r.painNOpportunity = c[0] || 0, r.planNPersonal = c[1] || 0, r.planNCorporate = c[2] || 0, r.bonus = c[3] || 0, r.comment = n.comment, g(r))
                                    } catch (l) {
                                        console.warn(l), n.notes = []
                                    }
                                    u = JSON.parse(localStorage.getItem("NEXT_AND_PREV_IDS")), n.nextEssayId = u[n.id].nextEssayId, n.prevEssayId = u[n.id].prevEssayId, console.log(n), i(n);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(a.useEffect)((function() {
                    t && !isNaN(t) && function(e) {
                        T.apply(this, arguments)
                    }(Number(t))
                }), [t]);
                var I = function() {
                        var e = h()(x.a.mark((function e(n) {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise(function() {
                                            var e = h()(x.a.mark((function e(a) {
                                                return x.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (f(!0), !(t > 0)) {
                                                                e.next = 1;
                                                                break
                                                            }
                                                            return n = Object(Ct.pickBy)(n), e.next = 1, cr.score(t, Jr({}, n)).then((function(e) {
                                                                e && a(!0)
                                                            })).catch((function(e) {
                                                                qt({
                                                                    type: "error",
                                                                    message: e.message
                                                                }), a(!1)
                                                            })).finally((function() {
                                                                f(!1)
                                                            }));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    D = function(e) {
                        return function(t) {
                            g(Jr(Jr({}, v), {}, A()({}, e, t)))
                        }
                    },
                    P = Object(a.useState)(!1),
                    R = y()(P, 2),
                    L = (R[0], R[1]),
                    M = function() {
                        var e = h()(x.a.mark((function e(n) {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        console.log("handleSaveNotes", n), L(!1), cr.updateNotes(t, JSON.stringify(n)).then((function() {
                                            qt({
                                                type: "success",
                                                message: "Saved notes"
                                            })
                                        })).catch((function(e) {
                                            qt({
                                                type: "error",
                                                message: e.message
                                            })
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    F = (Number(v.painNOpportunity) || 0) + (Number(v.planNPersonal) || 0) + (Number(v.planNCorporate) || 0) + (Number(v.bonus) || 0);
                return r.a.createElement(fr, {
                    className: "essay-detail-page",
                    showBackButton: !0,
                    onBack: function() {
                        e.push("/examine/essays")
                    }
                }, u.id > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "essay-metadata py-1"
                }, "ZA Essay ", u.id, " - ", r.a.createElement(Er, {
                    status: u.examiningStatus
                })), r.a.createElement("hr", {
                    className: "my-2"
                }), r.a.createElement("main", {
                    className: "d-flex flex-row justify-content-around flex-wrap\t"
                }, r.a.createElement("div", {
                    className: "pdf-wrapper max-w-full mb-10 w-8/12"
                }, r.a.createElement(Gr, {
                    onChange: function() {
                        L(!0)
                    },
                    onSave: M,
                    notes: u.notes || [],
                    onError: function(e) {
                        w(e), qt({
                            type: "error",
                            message: e
                        })
                    },
                    pdfUrl: "/api/zac_examine?option=load_essay_file&es_id=".concat(t)
                })), (u.examiningStatus === Qr.WAIT_FOR_DH_SCORE || u.examiningStatus === Qr.DH_SCORED || u.examiningStatus === Qr.CALIBRATED || u.examiningStatus === Qr.WAIT_FOR_CALIBRATE) && r.a.createElement(Mt.Form, {
                    className: "submit-form w-4/12",
                    ref: _,
                    model: v,
                    onSubmit: function(e) {
                        e.preventDefault(), _.current.validate(function() {
                            var e = h()(x.a.mark((function e(t) {
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 1, I(v);
                                        case 1:
                                            if (!e.sent) {
                                                e.next = 2;
                                                break
                                            }
                                            qt({
                                                type: "success",
                                                message: "Score successfully!"
                                            }), e.next = 3;
                                            break;
                                        case 2:
                                            return qt({
                                                type: "error",
                                                message: "Error!"
                                            }), console.log("error submit!!"), e.abrupt("return", !1);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    },
                    rules: Xr
                }, r.a.createElement("label", {
                    className: "font-bold"
                }, "Barem"), r.a.createElement(Mt.Form.Item, {
                    className: "form-item",
                    label: "Define Problem (3\u0111)",
                    prop: "painNOpportunity"
                }, r.a.createElement(Mt.Input, {
                    disabled: p,
                    type: "number",
                    value: v.painNOpportunity,
                    placeholder: "0 - 3",
                    onChange: D("painNOpportunity")
                })), r.a.createElement(Mt.Form.Item, {
                    className: "form-item",
                    label: "Action Plan - Personal (2\u0111)",
                    prop: "planNPersonal"
                }, r.a.createElement(Mt.Input, {
                    disabled: p,
                    type: "number",
                    value: v.planNPersonal,
                    placeholder: "0 - 2",
                    onChange: D("planNPersonal")
                })), r.a.createElement(Mt.Form.Item, {
                    className: "form-item",
                    label: "Action Plan - Corporate (4\u0111)",
                    prop: "planNCorporate"
                }, r.a.createElement(Mt.Input, {
                    disabled: p,
                    type: "number",
                    value: v.planNCorporate,
                    placeholder: "0 - 4",
                    onChange: D("planNCorporate")
                })), r.a.createElement(Mt.Form.Item, {
                    className: "form-item",
                    label: "Bonus (1\u0111)",
                    prop: "bonus"
                }, r.a.createElement(Mt.Input, {
                    disabled: p,
                    type: "number",
                    value: v.bonus,
                    placeholder: "0 - 1",
                    onChange: D("bonus")
                })), r.a.createElement(Mt.Form.Item, {
                    className: "total-scores ".concat(p ? "scoring" : "", " ").concat(F > 10 || F < 0 ? "danger" : "")
                }, "Total score:", "  ", r.a.createElement("strong", {
                    className: "text-lg"
                }, F)), r.a.createElement(Mt.Form.Item, {
                    className: "form-item",
                    label: "Comment",
                    prop: "comment"
                }, r.a.createElement(Mt.Input, {
                    disabled: p,
                    type: "textarea",
                    rows: 10,
                    value: v.comment,
                    placeholder: "Input Comment...",
                    onChange: D("comment")
                })), r.a.createElement(Mt.Button, {
                    type: "primary",
                    nativeType: "submit",
                    loading: p
                }, "Submit"), r.a.createElement(Mt.Button, {
                    onClick: function() {
                        e.push("/examine/essays/".concat(u.prevEssayId))
                    },
                    type: "secondary",
                    disabled: p || -1 === u.prevEssayId
                }, r.a.createElement(or.a, {
                    icon: sr.a
                }), " Previous"), r.a.createElement(Mt.Button, {
                    onClick: function() {
                        e.push("/examine/essays/".concat(u.nextEssayId))
                    },
                    type: "secondary",
                    disabled: p || -1 === u.nextEssayId
                }, "Next ", r.a.createElement(or.a, {
                    icon: sr.b
                }))))))
            }

            function ec() {
                return r.a.createElement(l.Switch, null, r.a.createElement(l.Redirect, {
                    from: p.path,
                    exact: !0,
                    to: p.ESSAYS
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: p.ESSAYS,
                    component: Ar
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: p.DETAIL,
                    component: $r
                }))
            }
            n(561), n(562);
            var tc = function(e) {
                var t = e.children,
                    n = e.title,
                    a = e.user;
                return r.a.createElement("div", {
                    className: "zac-container"
                }, r.a.createElement("nav", {
                    className: "navbar navbar-expand-lg navbar-light bg-primary text-light justify-content-between"
                }, r.a.createElement("a", {
                    className: "navbar-brand",
                    href: "#!"
                }, r.a.createElement("span", {
                    className: "font-weight-bold text-white"
                }, "ZA Challenge - ", n)), a && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "heading"
                }, r.a.createElement("div", {
                    className: "infor-user exm-infor"
                }, r.a.createElement("div", {
                    className: "name"
                }, a.name), "\xa0", r.a.createElement("div", {
                    className: "avatar"
                }, r.a.createElement("img", {
                    src: a.picture,
                    alt: "ZA Challenge"
                })))))), r.a.createElement("div", {
                    className: "zac-content"
                }, t), r.a.createElement(ka, null))
            };
            var nc = function() {
                var e = Object(s.b)(),
                    t = Object(s.c)((function(e) {
                        return e.common.user
                    })),
                    n = Object(s.c)((function(e) {
                        return e.examine.examinerId
                    }));

                function c() {
                    return (c = h()(x.a.mark((function t() {
                        var n;
                        return x.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 1, cr.check();
                                case 1:
                                    (n = t.sent) >= 0 ? (e(Ae(0 === n)), e(Ie(n))) : window.location.href = "/denied";
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                return Object(a.useEffect)((function() {
                    "off" === tt.EXAMINE && (window.location.href = "/no-active-session")
                }), []), Object(a.useEffect)((function() {
                    var n;

                    function a() {
                        return r.apply(this, arguments)
                    }

                    function r() {
                        return (r = h()(x.a.mark((function r() {
                            return x.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (t) {
                                            r.next = 1;
                                            break
                                        }
                                        return r.abrupt("return", new Promise((function(t, r) {
                                            Xn.login().then((function(n) {
                                                e(ye(n)), t(n)
                                            })).catch((function(e) {
                                                n = setTimeout(a, 3e3), r(e)
                                            }))
                                        })));
                                    case 1:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))).apply(this, arguments)
                    }
                    return a(),
                        function() {
                            return n && clearTimeout(n)
                        }
                }), [t]), Object(a.useEffect)((function() {
                    t && function() {
                        c.apply(this, arguments)
                    }()
                }), [t]), r.a.createElement(tc, {
                    user: t,
                    title: "Essay Examination"
                }, n >= 0 && r.a.createElement(ec, null))
            };
            n(563);
            var ac = {
                    getZATestSubmissionLogContent: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "download_zatest_submission_log_content"), {
                                            params: {
                                                submissionId: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getAllCampaign: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_all_campaign"), {});
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getMultipleChoiceLogContent: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "download_mc_log_content"), {
                                            params: {
                                                domain: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getAllMultipleChoiceTest: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_all_mc"), {
                                            params: {
                                                domain: t,
                                                is_all: n
                                            }
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getMultipleChoiceTestInProgress: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_all_mc_inprogress"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    submitMultipleChoiceTest: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("monitor", "submit_mc"), {
                                            mc_id: n,
                                            sm_id: t
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    submitAllMultipleChoiceTest: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("monitor", "submit_all_mc"), {});
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getEssayTestInProgress: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_all_essay_inprogress"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    submitEssayTest: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("monitor", "submit_essay"), {
                                            es_id: t
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    updateSubmissionStatus: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("monitor", "update_sm_status"), {
                                            domain: t,
                                            status: n
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getStatistic: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_statistic"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getWarningLog: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_warning_log"), {
                                            params: {
                                                domain: ""
                                            }
                                        });
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getTimeUpLog: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_full_action_log_time_up"), {});
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getActionLogSubmitted: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_official_content_submittd"), {});
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getActionLog: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_action_log"), {
                                            params: {
                                                domain: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getZATestTestInProgress: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "get_zatest_statistic"), {
                                            params: {
                                                campaignId: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getTestResult: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "result_mc"), {
                                            params: {
                                                mc_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    nextSection: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "next_section"), {
                                            params: {
                                                sm_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    submitTest: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "submit_test"), {
                                            params: {
                                                sm_id: t
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    updateFile: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("monitor", "file"), t, {
                                            headers: {
                                                "content-type": "multipart/form-data"
                                            }
                                        });
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((a = n.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    addBonusTime: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "add_bonus_time"), {
                                            params: {
                                                mcIds: t,
                                                time: n
                                            }
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    export: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get(ot("monitor", "export"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    changeAllToWaitForDHScore: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("monitor", "change_all_init_essays_to_wait_for_dept_head"));
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                rc = 1,
                cc = 2,
                uc = 3,
                lc = 4,
                ic = 5;

            function sc() {
                var e = Object(a.useState)(null),
                    t = y()(e, 2),
                    n = t[0],
                    c = t[1],
                    u = Object(a.useState)(!1),
                    l = y()(u, 2),
                    i = l[0],
                    s = l[1],
                    o = Object(a.useState)(cc),
                    m = y()(o, 2),
                    p = m[0],
                    f = m[1];

                function d() {
                    return (d = h()(x.a.mark((function e(t) {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 5;
                                        break
                                    }
                                    if (s(!1), c("Fetching log of domain <strong>" + t + "</strong>..."), n = null, p !== rc) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.next = 1, ac.getMultipleChoiceLogContent(t);
                                case 1:
                                    n = e.sent, e.next = 4;
                                    break;
                                case 2:
                                    if (p !== cc) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3, ac.getActionLog(t);
                                case 3:
                                    (n = e.sent) && (n = n.replace(/(?:\r\n|\r|\n)/g, "<br>"));
                                case 4:
                                    null !== n && (c(n), s(!0));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function E() {
                    c(null), s(!1), O()
                }
                var b = Object(a.useState)(""),
                    v = y()(b, 2),
                    g = v[0],
                    O = v[1];
                return Object(a.useEffect)((function() {
                    ! function(e) {
                        d.apply(this, arguments)
                    }(g)
                }), [g]), Object(a.useEffect)((function() {
                    var e = function() {
                        var e = h()(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = null, p !== uc) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.next = 1, ac.getWarningLog();
                                    case 1:
                                        (t = e.sent) && (t = t.replace(/(?:\r\n|\r|\n)/g, "<br>")), null !== t && (c(t), s(!0));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    E(), p === uc && e()
                }), [p]), Object(a.useEffect)((function() {
                    var e = function() {
                        var e = h()(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = null, p !== lc) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.next = 1, ac.getTimeUpLog();
                                    case 1:
                                        (t = e.sent) && (t = t.replace(/(?:\r\n|\r|\n)/g, "<br>")), null !== t && (c(t), s(!0));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    E(), p === lc && e()
                }), [p]), Object(a.useEffect)((function() {
                    var e = function() {
                        var e = h()(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = null, p !== ic) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.next = 1, ac.getActionLogSubmitted();
                                    case 1:
                                        (t = e.sent) && (t = t.replace(/(?:\r\n|\r|\n)/g, "<br>")), null !== t && (c(t), s(!0));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    E(), p === ic && e()
                }), [p]), Object(a.useEffect)((function() {
                    p === cc && function() {
                        var e = h()(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = null, p !== cc) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.next = 1, ac.getActionLog();
                                    case 1:
                                        (t = e.sent) && (t = t.replace(/(?:\r\n|\r|\n)/g, "<br>")), null !== t && (c(t), s(!0));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }), [p]), r.a.createElement("div", {
                    className: "multiple-choice-log"
                }, r.a.createElement("div", null, r.a.createElement(Mt.Radio, {
                    value: cc,
                    checked: p === cc,
                    onChange: function(e) {
                        return f(e)
                    }
                }, "ACTION_LOG"), r.a.createElement(Mt.Radio, {
                    value: uc,
                    checked: p === uc,
                    onChange: function(e) {
                        return f(e)
                    }
                }, "WARNING"), r.a.createElement(Mt.Radio, {
                    value: rc,
                    checked: p === rc,
                    onChange: function(e) {
                        return f(e)
                    }
                }, "MULTIPLE_CHOICES"), r.a.createElement(Mt.Radio, {
                    value: lc,
                    checked: p === lc,
                    onChange: function(e) {
                        return f(e)
                    }
                }, "TIME_UP"), r.a.createElement(Mt.Radio, {
                    value: ic,
                    checked: p === ic,
                    onChange: function(e) {
                        return f(e)
                    }
                }, "ACTION_LOG_SUBMITTED")), p !== uc && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "w-1/3"
                }, r.a.createElement(Sr, {
                    className: "max-w-full",
                    onClear: function() {
                        return O()
                    },
                    placeholder: "Search by domain...",
                    value: "",
                    onSearch: function(e) {
                        return O(e)
                    }
                }))), r.a.createElement("div", {
                    className: "log-pane"
                }, i && r.a.createElement("div", {
                    className: "log-pane-clear-btn",
                    onClick: E
                }, "Clear"), Et()(n || "No log found")))
            }

            function oc(e) {
                var t = e.value,
                    n = e.onChange,
                    a = e.onClear,
                    c = e.onSearch,
                    u = e.placeholder,
                    l = e.className;
                return r.a.createElement("form", {
                    className: "relative clearable-input ".concat(l),
                    onSubmit: function(e) {
                        e.preventDefault(), c && c(t, e)
                    }
                }, r.a.createElement(Mt.Input, {
                    className: ir("", "", "darkmode text-white-i"),
                    onChange: n,
                    placeholder: u,
                    value: t,
                    append: r.a.createElement(Mt.Button, {
                        type: "primary",
                        className: ir("hover:text-primary-i", "", "darkmode text-gray-300"),
                        icon: "search",
                        nativeType: "submit"
                    }, r.a.createElement("span", {
                        className: "hidden md:inline"
                    }, "Search"))
                }), t && r.a.createElement("span", {
                    className: "close-search close-btn cursor-pointer absolute text-gray-400 hover:text-gray-500",
                    style: {
                        top: "7px",
                        right: "100px"
                    },
                    onClick: a
                }, r.a.createElement(Mt.Icon, {
                    name: "circle-close"
                })))
            }
            var mc = n(192);

            function pc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function fc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pc(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var dc = {
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "0 0 0 10px",
                    fontSize: "13px"
                },
                Ec = [{
                    value: 21,
                    label: "(Test) ZAC 10 - GMAT Focus Edition"
                }, {
                    value: 22,
                    label: "(Test Batch 2) ZAC 10 - GMAT Focus Edition"
                }, {
                    value: 23,
                    label: "(Test load) ZAC 10 - GMAT Focus Edition"
                }, {
                    value: 24,
                    label: "Final Test"
                }, {
                    value: 25,
                    label: "(Test Batch 3) ZAC 10 - GMAT Focus Edition"
                }, {
                    value: 26,
                    label: "(Test Batch 4) ZAC 10 - GMAT Focus Edition"
                }, {
                    value: 27,
                    label: "ZAC 10 - GMAT Focus Edition"
                }, {
                    value: 28,
                    label: "ZAC 11 - GMAT Focus Edition"
                }, {
                    value: 29,
                    label: "ZAC 12 Test"
                }, {
                    value: 30,
                    label: "ZAC 12 Test Batch 2"
                }, {
                    value: 31,
                    label: "ZAC 12 - GMAT Focus Edition"
                }],
                bc = [{
                    value: 1,
                    label: "INIT"
                }, {
                    value: 3,
                    label: "DONE"
                }];

            function vc() {
                var e = Object(a.useState)(!1),
                    t = y()(e, 2),
                    n = t[0],
                    c = t[1],
                    u = Object(a.useState)(!1),
                    l = y()(u, 2),
                    i = l[0],
                    s = l[1],
                    o = Object(a.useState)(),
                    m = y()(o, 2),
                    p = m[0],
                    f = m[1],
                    d = Object(a.useState)(),
                    E = y()(d, 2),
                    b = E[0],
                    v = E[1],
                    g = Object(a.useState)(),
                    O = y()(g, 2),
                    S = O[0],
                    w = O[1],
                    N = Object(a.useState)(),
                    k = y()(N, 2),
                    C = k[0],
                    j = k[1],
                    _ = Object(a.useState)(),
                    T = y()(_, 2),
                    I = T[0],
                    A = T[1];

                function D() {
                    return (D = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s(!0), e.next = 1, ac.submitAllMultipleChoiceTest();
                                case 1:
                                    t = e.sent, s(!1), qt(t ? {
                                        type: "success",
                                        message: "Submit all success"
                                    } : {
                                        type: "error",
                                        message: "Cannot Submit all, please check logs"
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var P = function() {
                        var e = h()(x.a.mark((function e(t) {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, ac.nextSection(t);
                                    case 1:
                                        qt(e.sent ? {
                                            type: "success",
                                            message: "Next section success"
                                        } : {
                                            type: "error",
                                            message: "Cannot next section, please check current submission's section or status"
                                        }), v();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    R = function() {
                        var e = h()(x.a.mark((function e(t) {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, ac.submitTest(t);
                                    case 1:
                                        qt(e.sent ? {
                                            type: "success",
                                            message: "Submit test success"
                                        } : {
                                            type: "error",
                                            message: "Cannot submit test, please check log"
                                        }), w();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    L = function() {
                        var e = h()(x.a.mark((function e() {
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(C && C.length > 0)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.next = 1, ac.addBonusTime(C, I);
                                    case 1:
                                        qt(e.sent ? {
                                            type: "success",
                                            message: "Add bonus time success"
                                        } : {
                                            type: "error",
                                            message: "Add bonus time failed"
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                var M = Object(a.useState)(),
                    F = y()(M, 2),
                    U = F[0],
                    q = F[1],
                    B = Object(a.useState)(),
                    H = y()(B, 2),
                    z = H[0],
                    G = H[1],
                    Z = Object(a.useState)(27),
                    K = y()(Z, 2),
                    V = K[0],
                    J = K[1],
                    Q = Object(a.useState)(),
                    X = y()(Q, 2),
                    $ = X[0],
                    ee = X[1],
                    te = Object(a.useState)(),
                    ne = y()(te, 2),
                    ae = ne[0],
                    re = ne[1],
                    ce = Object(a.useState)(1),
                    ue = y()(ce, 2),
                    le = ue[0],
                    ie = ue[1],
                    se = Object(a.useState)(20),
                    oe = y()(se, 2),
                    me = oe[0],
                    pe = (oe[1], function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(!0), e.next = 1, lt.get("/api/zac_monitor?option=get_mc_slice", {
                                            params: {
                                                domain: U,
                                                sectionId: z,
                                                sessionId: V,
                                                page: t,
                                                size: me,
                                                status: $
                                            }
                                        });
                                    case 1:
                                        return n = e.sent, c(!1), n && (a = n.data).code === We && re(a.data), e.abrupt("return", null);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }());
                return r.a.createElement("div", {
                    className: "multiple-choice-handler"
                }, r.a.createElement("div", {
                    className: "d-flex flex-row justify-content-between"
                }, r.a.createElement("h4", {
                    className: "text-xl font-bold"
                }, "List of Multiple choice"), r.a.createElement("div", {
                    className: "d-flex"
                }, r.a.createElement("div", {
                    className: "d-flex"
                }, r.a.createElement("input", {
                    style: fc(fc({}, dc), {}, {
                        width: "400px"
                    }),
                    placeholder: "Multiple choice ids",
                    value: C,
                    onChange: function(e) {
                        return j(e.target.value)
                    },
                    className: "mr-2"
                }), r.a.createElement("input", {
                    placeholder: "Time (seconds)",
                    style: dc,
                    value: I,
                    onChange: function(e) {
                        return A(e.target.value)
                    },
                    className: "mr-2"
                }), r.a.createElement(Mt.Button, {
                    className: "mr-2",
                    type: "success",
                    size: "small",
                    onClick: L
                }, r.a.createElement(or.a, {
                    icon: sr.n,
                    className: "mr-1"
                }), " Add bonus time")), i ? r.a.createElement(r.a.Fragment, null, "Submitingggg ...") : r.a.createElement(Mt.Button, {
                    type: "success",
                    size: "small",
                    onClick: function() {
                        return D.apply(this, arguments)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.p,
                    className: "mr-1"
                }), " Submit All"))), r.a.createElement("hr", {
                    className: "mb-6 mt-2"
                }), r.a.createElement("div", {
                    className: "flex flex-wrap mb-4"
                }, r.a.createElement("div", {
                    className: "w-full sm:pr-2 sm:w-1/4 md:pr-2 mt-2"
                }, r.a.createElement(oc, {
                    className: "max-w-full",
                    onClear: function() {
                        return q()
                    },
                    placeholder: "Search by domain...",
                    value: U,
                    onChange: q,
                    onSearch: function() {
                        return pe(le)
                    }
                })), r.a.createElement("div", {
                    className: "w-full sm:pr-2 sm:w-1/4 md:pr-2 mt-2"
                }, r.a.createElement(Mt.Select, {
                    value: "",
                    clearable: !0,
                    className: "w-full",
                    placeholder: "Filter by section...",
                    onChange: function(e) {
                        return G(e)
                    }
                }, r.a.createElement(Mt.Select.Option, {
                    value: 9,
                    label: "Quantitative"
                }), r.a.createElement(Mt.Select.Option, {
                    value: 10,
                    label: "Mixed (Verbal - Data Insight)"
                }))), r.a.createElement("div", {
                    className: "w-full sm:pr-2 sm:w-1/4 md:pr-2 mt-2"
                }, r.a.createElement(Mt.Select, {
                    value: V,
                    clearable: !0,
                    className: "w-full",
                    placeholder: "Filter by session...",
                    onChange: function(e) {
                        return J(e)
                    }
                }, Ec.map((function(e) {
                    return r.a.createElement(Mt.Select.Option, {
                        key: e.value,
                        value: e.value,
                        label: e.label
                    })
                })))), r.a.createElement("div", {
                    className: "w-1/8 pr-2 mt-2"
                }, r.a.createElement(Mt.Select, {
                    value: $,
                    clearable: !0,
                    className: "w-full",
                    placeholder: "Filter by status...",
                    onChange: function(e) {
                        return ee(e)
                    }
                }, bc.map((function(e) {
                    return r.a.createElement(Mt.Select.Option, {
                        key: e.value,
                        value: e.value,
                        label: e.label
                    })
                })))), r.a.createElement("div", {
                    className: "w-1/8 mt-2"
                }, n ? r.a.createElement(r.a.Fragment, null, "Fetching...") : r.a.createElement(Mt.Button, {
                    type: "primary",
                    onClick: function() {
                        return pe(le)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.o,
                    className: "mr-1"
                }), " Fetch data"))), function() {
                    var e = (le - 1) * me;
                    return r.a.createElement("p", {
                        className: "text-sm pb-3 text-gray-700"
                    }, "Show", " ", r.a.createElement("b", null, e + 1, " - ", e + (null === ae || void 0 === ae ? void 0 : ae.items.length)), " ", "/ ", r.a.createElement("b", null, null === ae || void 0 === ae ? void 0 : ae.total), " items")
                }(), r.a.createElement(yr, null, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement(yr.Column, {
                    head: !0
                }, "ID"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Submission ID"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Domain"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Section"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Score"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Bonus Time (Seconds)"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Status"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Start Time"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Update Time"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Submitted Time"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Action"))), r.a.createElement("tbody", null, n && "Fetching", !n && ae && ae.items.length > 0 && r.a.createElement(r.a.Fragment, null, ae.items.map((function(e, t) {
                    return r.a.createElement("tr", {
                        className: "hover:bg-gray-200",
                        key: e.id
                    }, r.a.createElement(yr.Column, null, r.a.createElement("span", {
                        className: "text-primary underline mr-2 cursor-pointer",
                        onClick: function() {
                            return f(e)
                        }
                    }, r.a.createElement(mc.Link, {
                        className: "text-primary underline",
                        to: "/monitor/test/result/".concat(e.id)
                    }, e.id))), r.a.createElement(yr.Column, null, e.submissionId), r.a.createElement(yr.Column, null, e.domain), r.a.createElement(yr.Column, null, e.sectionName), r.a.createElement(yr.Column, null, e.scores), r.a.createElement(yr.Column, null, e.bonusTime / 1e3), r.a.createElement(yr.Column, null, r.a.createElement(Mt.Tag, {
                        type: "".concat(Y[e.status])
                    }, W[e.status])), r.a.createElement(yr.Column, null, Nt()(e.startTime).format("DD/MM/YYYY HH:mm")), r.a.createElement(yr.Column, null, Nt()(e.updatedAt).format("DD/MM/YYYY HH:mm")), r.a.createElement(yr.Column, null, e.submittedTime ? Nt()(e.submittedTime).format("DD/MM/YYYY HH:mm") : ""), r.a.createElement(yr.Column, null, r.a.createElement("span", {
                        className: "text-primary underline mr-2 cursor-pointer",
                        onClick: function() {
                            return v(e)
                        }
                    }, "Next section"), 10 === e.sectionId && r.a.createElement("span", {
                        className: "text-primary underline mr-2 cursor-pointer",
                        onClick: function() {
                            return w(e)
                        }
                    }, "Submit test")))
                }))))), r.a.createElement("div", {
                    className: "flex justify-center mt-5"
                }, r.a.createElement(Mt.Pagination, {
                    layout: "prev, pager, next",
                    className: ir("", "", "darkmode"),
                    total: null === ae || void 0 === ae ? void 0 : ae.total,
                    pageSize: nt,
                    currentPage: le,
                    onCurrentChange: function(e) {
                        ie(e), pe(e)
                    }
                })), r.a.createElement(Cr, {
                    visible: !!b,
                    onClose: function() {
                        v(null)
                    },
                    title: "Are you sure to next section ".concat(null === b || void 0 === b ? void 0 : b.domain, "_").concat(null === b || void 0 === b ? void 0 : b.sectionName),
                    showControlButtons: !0,
                    showSubmit: !0,
                    onSubmit: function() {
                        return P(null === b || void 0 === b ? void 0 : b.submissionId)
                    }
                }), r.a.createElement(Cr, {
                    visible: !!S,
                    onClose: function() {
                        w(null)
                    },
                    title: "Are you sure to submit ".concat(null === S || void 0 === S ? void 0 : S.domain, "'s test"),
                    showControlButtons: !0,
                    showSubmit: !0,
                    onSubmit: function() {
                        return R(null === S || void 0 === S ? void 0 : S.submissionId)
                    }
                }), r.a.createElement(Cr, {
                    visible: !!p,
                    onClose: function() {
                        f(null)
                    },
                    showControlButtons: !1,
                    title: p && p.domain + "_" + p.sectionName
                }, r.a.createElement("div", null, p && r.a.createElement(r.a.Fragment, null, r.a.createElement("strong", null, "Answers:"), r.a.createElement("ul", null, Object.entries(JSON.parse(p.content)).map((function(e) {
                    var t = y()(e, 2),
                        n = t[0],
                        a = t[1];
                    return r.a.createElement("li", {
                        key: n
                    }, "".concat(n, ": ").concat(a))
                }))), r.a.createElement("br", null), r.a.createElement("strong", null, "Submited detail:"), r.a.createElement("ul", null, Object.entries(JSON.parse(p.detail)).map((function(e) {
                    var t = y()(e, 2),
                        n = t[0],
                        a = t[1];
                    return r.a.createElement("li", {
                        key: n
                    }, "".concat(n, ": ").concat(a))
                })), r.a.createElement("li", {
                    key: "scores"
                }, "Scores: ".concat(p.scores)))))))
            }

            function hc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function gc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? hc(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var yc = 1,
                Oc = 2;

            function xc() {
                var e = Object(a.useState)([]),
                    t = y()(e, 2),
                    n = t[0],
                    c = t[1],
                    u = Object(a.useState)({}),
                    l = y()(u, 2),
                    i = l[0],
                    s = l[1],
                    o = Object(a.useState)({}),
                    m = y()(o, 2),
                    p = m[0],
                    f = m[1],
                    d = Object(a.useState)(!1),
                    E = y()(d, 2),
                    b = E[0],
                    v = E[1],
                    g = Object(a.useRef)(),
                    O = Object(a.useState)(!1),
                    S = y()(O, 2),
                    w = S[0],
                    N = S[1];

                function k() {
                    return (k = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return v(!0), e.next = 1, ac.getEssayTestInProgress();
                                case 1:
                                    (t = e.sent) && (c(t), s({}), f({})), v(!1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function C() {
                    return (C = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!R(P())) {
                                        e.next = 4;
                                        break
                                    }
                                    t = 0;
                                case 1:
                                    if (!(t < n.length)) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 2, T(n[t].id, !1);
                                case 2:
                                    return e.next = 3, new Promise((function(e) {
                                        return setTimeout(e, 1e3)
                                    }));
                                case 3:
                                    t++, e.next = 1;
                                    break;
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function j() {
                    return (j = h()(x.a.mark((function e() {
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!R(P())) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.next = 1, ac.changeAllToWaitForDHScore();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function _() {
                    return (_ = h()(x.a.mark((function e() {
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, ac.export();
                                case 1:
                                    qt(e.sent === We ? {
                                        message: r.a.createElement("span", null, "Export successfully, please check ", r.a.createElement("strong", null, "Exporting essays"), " tab"),
                                        type: "success"
                                    } : {
                                        message: "Export fail",
                                        type: "error"
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function T(e, t) {
                    return I.apply(this, arguments)
                }

                function I() {
                    return (I = h()(x.a.mark((function e(t, n) {
                        var a;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = n && P(), n && !R(a)) {
                                        e.next = 2;
                                        break
                                    }
                                    return D(t, yc), e.next = 1, ac.submitEssayTest(t);
                                case 1:
                                    D(t, Oc), e.next = 3;
                                    break;
                                case 2:
                                    alert("Wrong key...");
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function D(e, t) {
                    s((function(n) {
                        return gc(gc({}, n), {}, A()({}, e, t))
                    }))
                }

                function P() {
                    return prompt("Please enter monitor key to continue:", "")
                }

                function R(e) {
                    return null != e && "goodboiz" === e
                }

                function L() {
                    return (L = h()(x.a.mark((function e(t, n) {
                        var a, r;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t.target.files && t.target.files.length > 0)) {
                                        e.next = 6;
                                        break
                                    }
                                    return a = t.target.files[0], (r = new FormData).append("es_id", n), r.append("file", a), N(!0), f(gc(gc({}, i), {}, A()({}, n, yc))), e.prev = 1, e.next = 2, ac.updateFile(r);
                                case 2:
                                    e.sent ? (f(gc(gc({}, i), {}, A()({}, n, Oc))), qt({
                                        type: "success",
                                        message: "Upload file for essay ".concat(n, " has successfully")
                                    })) : qt({
                                        type: "error",
                                        message: "Upload file has failed"
                                    }), e.next = 4;
                                    break;
                                case 3:
                                    e.prev = 3, e.catch(1), qt({
                                        type: "error",
                                        message: "Upload file has failed"
                                    });
                                case 4:
                                    return e.prev = 4, N(!1), e.finish(4);
                                case 5:
                                    g.current.value = "";
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 3, 4, 5]
                        ])
                    })))).apply(this, arguments)
                }
                var M = function(e) {
                    return p[e.id] === yc ? "Uploading..." : p[e.id] === Oc ? "Uploaded" : e.file ? e.file.split(":")[0] : r.a.createElement("input", {
                        disabled: w,
                        ref: g,
                        className: "form-control-file",
                        type: "file",
                        id: "inputFile",
                        accept: ".pdf",
                        onChange: function(t) {
                            return function(e, t) {
                                return L.apply(this, arguments)
                            }(t, e.id)
                        }
                    })
                };
                return r.a.createElement("div", {
                    className: "multiple-choice-handler"
                }, r.a.createElement("div", {
                    className: "d-flex flex-row justify-content-between"
                }, r.a.createElement("h4", {
                    className: "text-xl font-bold"
                }, "List of In-Progress Essays"), r.a.createElement("div", null, r.a.createElement(Mt.Button, {
                    type: "primary",
                    size: "small",
                    onClick: function() {
                        return _.apply(this, arguments)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.p,
                    className: "mr-1"
                }), " Export all"), r.a.createElement(Mt.Button, {
                    type: "success",
                    size: "small",
                    onClick: function() {
                        return j.apply(this, arguments)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.p,
                    className: "mr-1"
                }), " Change all to WAIT_FOR_DEPT_HEAD score"), r.a.createElement(Mt.Button, {
                    type: "success",
                    size: "small",
                    onClick: function() {
                        return C.apply(this, arguments)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.p,
                    className: "mr-1"
                }), " Submit All"), b ? r.a.createElement(r.a.Fragment, null, "Fetching...") : r.a.createElement(Mt.Button, {
                    type: "primary",
                    size: "small",
                    onClick: function() {
                        return k.apply(this, arguments)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.o,
                    className: "mr-1"
                }), " Refresh"), " | ", r.a.createElement("b", null, "Total:"), " ", n.length)), r.a.createElement("hr", {
                    className: "mb-6 mt-2"
                }), r.a.createElement(yr, null, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement(yr.Column, {
                    head: !0
                }, "#"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Domain"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Submission ID"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Start Time"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Action"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Upload"))), r.a.createElement("tbody", null, b ? r.a.createElement("tr", null, r.a.createElement("td", {
                    className: "text-center",
                    colSpan: 5
                }, "Fetching data...")) : r.a.createElement(r.a.Fragment, null, n.length > 0 ? r.a.createElement(r.a.Fragment, null, n.map((function(e, t) {
                    return r.a.createElement("tr", {
                        className: ir(!e.file && "bg-red-200", "hover:bg-gray-200", "hover:bg-gray-700"),
                        key: e.id
                    }, r.a.createElement(yr.Column, null, t + 1), r.a.createElement(yr.Column, null, e.domain), r.a.createElement(yr.Column, null, e.submissionId), r.a.createElement(yr.Column, null, Nt()(e.startTime).format("DD/MM/YYYY HH:mm")), r.a.createElement(yr.Column, null, !i[e.id] && r.a.createElement(Mt.Button, {
                        type: "success",
                        onClick: function() {
                            return T(e.id, !0)
                        }
                    }, r.a.createElement(or.a, {
                        icon: sr.p,
                        className: "mr-1"
                    }), " Submit"), i[e.id] === yc && r.a.createElement(r.a.Fragment, null, "Processing..."), i[e.id] === Oc && r.a.createElement(r.a.Fragment, null, "Submitted")), r.a.createElement(yr.Column, null, M(e)))
                }))) : r.a.createElement("tr", null, r.a.createElement("td", {
                    className: "text-center",
                    colSpan: 5
                }, "No data found"))))))
            }

            function Sc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function wc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sc(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nc = R;

            function kc() {
                var e = Object(a.useState)({}),
                    t = y()(e, 2),
                    n = t[0],
                    c = t[1],
                    u = Object(a.useState)({}),
                    l = y()(u, 2),
                    i = l[0],
                    s = l[1];

                function o() {
                    return (o = h()(x.a.mark((function e() {
                        var t;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return m("statistic", !0), e.next = 1, ac.getStatistic();
                                case 1:
                                    (t = e.sent) && c(t), m("statistic", !1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function m(e, t) {
                    s((function(n) {
                        return wc(wc({}, n), {}, A()({}, e, t))
                    }))
                }
                var p = Object(a.useMemo)((function() {
                    return Object.keys(n).reduce((function(e, t) {
                        return e + n[t]
                    }), 0)
                }), [n]);
                return r.a.createElement("div", {
                    className: "statistic"
                }, r.a.createElement("div", {
                    className: "d-flex flex-row"
                }, r.a.createElement("div", null, i.statistic ? r.a.createElement(r.a.Fragment, null, "Fetching...") : r.a.createElement(Mt.Button, {
                    type: "primary",
                    size: "small",
                    onClick: function() {
                        return o.apply(this, arguments)
                    }
                }, r.a.createElement(or.a, {
                    icon: sr.o,
                    className: "mr-1"
                }), " Fetch overall statistic"))), r.a.createElement("hr", {
                    className: "mb-6 mt-2"
                }), r.a.createElement("div", {
                    className: "d-flex flex-row"
                }, !i.statistic && r.a.createElement("ul", {
                    style: {
                        listStyleType: "disc"
                    }
                }, Object.keys(n).map((function(e, t) {
                    return r.a.createElement("li", {
                        key: t
                    }, "\u2022 ", Nc[e], ": ", n[e])
                })), p > 0 && r.a.createElement("li", null, r.a.createElement("strong", null, "Total:"), " ", p))))
            }

            function Cc() {
                var e = Object(a.useState)([]),
                    t = y()(e, 2),
                    n = t[0],
                    c = t[1],
                    u = Object(a.useState)({
                        isShowResult: 0
                    }),
                    l = y()(u, 2),
                    i = (l[0], l[1]),
                    s = Object(a.useState)(!1),
                    o = y()(s, 2),
                    m = o[0],
                    p = o[1],
                    f = Object(a.useState)(null),
                    d = y()(f, 2),
                    E = d[0],
                    b = d[1],
                    v = Object(a.useState)(!1),
                    g = y()(v, 2),
                    O = g[0],
                    S = g[1],
                    w = Object(a.useRef)(null),
                    N = Object(a.useState)([]),
                    k = y()(N, 2),
                    C = k[0],
                    j = k[1],
                    _ = Object(a.useState)(null),
                    T = y()(_, 2),
                    I = T[0],
                    A = T[1];

                function D(e) {
                    return P.apply(this, arguments)
                }

                function P() {
                    return (P = h()(x.a.mark((function e(t) {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return p(!0), e.next = 1, ac.getZATestTestInProgress(t);
                                case 1:
                                    (n = e.sent) && c(n), p(!1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function R() {
                    return (R = h()(x.a.mark((function e(t) {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return b("Fetching ..."), e.next = 1, ac.getZATestSubmissionLogContent(t);
                                case 1:
                                    null !== (n = e.sent) && (i({
                                        isShowResult: t
                                    }), b(n), S(!0));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return Vn(w, (function() {
                    return S(!1)
                })), Object(a.useEffect)((function() {
                    function e() {
                        return (e = h()(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, ac.getAllCampaign();
                                    case 1:
                                        (t = e.sent) && j(t);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), []), Object(a.useEffect)((function() {
                    D(I)
                }), [I]), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "modal",
                    style: {
                        display: O ? "block" : "none"
                    }
                }, r.a.createElement("div", {
                    ref: w,
                    className: "modal-content"
                }, E && Et()(E || "No log found"))), r.a.createElement("div", {
                    className: "multiple-choice-handler"
                }, r.a.createElement("div", {
                    className: "d-flex flex-row justify-content-between"
                }, r.a.createElement("h4", {
                    className: "text-xl font-bold"
                }, "List of In-Progress ZATest Submission"), r.a.createElement("div", null, m ? r.a.createElement(r.a.Fragment, null, "Fetching...") : r.a.createElement(Mt.Button, {
                    type: "primary",
                    size: "small",
                    onClick: D
                }, r.a.createElement(or.a, {
                    icon: sr.o,
                    className: "mr-1"
                }), " Refresh"), " | ", r.a.createElement("b", null, "Total:"), " ", n.length)), r.a.createElement("hr", {
                    className: "mb-6 mt-2"
                }), r.a.createElement(Mt.Select, {
                    className: "mb-2",
                    placeholder: "Select campaign ",
                    onChange: function(e) {
                        return A(e)
                    }
                }, C.map((function(e) {
                    return r.a.createElement(Mt.Select.Option, {
                        key: e.id,
                        label: e.name,
                        value: e.id
                    }, e.name)
                }))), r.a.createElement(yr, null, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement(yr.Column, {
                    head: !0
                }, "#"), r.a.createElement(yr.Column, {
                    head: !0
                }, "ID"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Name"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Start Time"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Action"))), r.a.createElement("tbody", null, m ? r.a.createElement("tr", null, r.a.createElement("td", {
                    className: "text-center",
                    colSpan: 5
                }, "Fetching data...")) : r.a.createElement(r.a.Fragment, null, n.length > 0 ? r.a.createElement(r.a.Fragment, null, n.map((function(e, t) {
                    return r.a.createElement("tr", {
                        className: ir("", "hover:bg-gray-200", "hover:bg-gray-700"),
                        key: e.id
                    }, r.a.createElement(yr.Column, null, t + 1), r.a.createElement(yr.Column, null, e.id), r.a.createElement(yr.Column, null, e.name), r.a.createElement(yr.Column, null, Nt()(e.startTime).format("DD/MM/YYYY HH:mm")), r.a.createElement(yr.Column, null, r.a.createElement("p", {
                        role: "button",
                        className: "text-primary underline",
                        onClick: function() {
                            return function(e) {
                                return R.apply(this, arguments)
                            }(e.id)
                        }
                    }, "Show result")))
                }))) : r.a.createElement("tr", null, r.a.createElement("td", {
                    className: "text-center",
                    colSpan: 5
                }, "No data found")))))))
            }

            function jc(e) {
                var t, n, a = e.endpoint,
                    c = e.file,
                    u = c.filename && c.filename.split(".").pop().toLowerCase();
                return "doc" === u || "docx" === u ? (n = sr.l, t = "text-blue-500") : "ppt" === u || "pptx" === u ? (n = sr.k, t = "text-orange-700") : "xls" === u || "xlsx" === u || "csv" === u ? (n = sr.h, t = "text-green-700") : "pdf" === u ? (n = sr.j, t = "text-red-700") : "jpg" === u || "png" === u || "gif" === u || "jpeg" === u ? (n = sr.i, t = "text-green-400") : "zip" === u || "rar" === u ? (n = sr.m, t = "text-purple-600") : (n = sr.g, t = "text-gray-400"), r.a.createElement(r.a.Fragment, null, c && r.a.createElement("a", {
                    href: a,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: ir("flex items-center p-2 border rounded hover:border-primary hover:text-primary cursor-pointer", "bg-white hover:bg-gray-200", "bg-gray-800 hover:bg-gray-900")
                }, r.a.createElement("div", {
                    className: "w-full flex text-sm items-center"
                }, r.a.createElement(or.a, {
                    icon: n,
                    className: "mr-3 text-2xl " + t
                }), r.a.createElement("div", {
                    className: "w-2/3"
                }, r.a.createElement("p", {
                    className: "truncate w-full"
                }, c.filename), r.a.createElement("p", {
                    className: ir("w-full text-xs", "text-gray-600", "text-gray-400")
                }, Nt()(c.updatedAt).format("DD/MM/YYYY HH:mm:ss")))), r.a.createElement(or.a, {
                    className: "ml-auto text-primary",
                    icon: sr.e
                })))
            }
            var _c = {
                    getSlice: function() {
                        var e = h()(x.a.mark((function e(t, n) {
                            var a, r;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log(ot("export", "get_slice")), e.next = 1, lt.get(ot("export", "get_slice"), {
                                            offset: t,
                                            size: n
                                        });
                                    case 1:
                                        if (!(a = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((r = a.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                Tc = 1,
                Ic = 2,
                Ac = 3,
                Dc = 4;
            var Pc = function(e) {
                var t = Object(a.useState)({
                        offset: 0,
                        size: 20
                    }),
                    n = y()(t, 2),
                    c = n[0],
                    u = (n[1], Object(a.useState)()),
                    l = y()(u, 2),
                    i = l[0],
                    s = l[1];
                Object(a.useEffect)((function() {}), []);
                var o = function() {
                    var e = h()(x.a.mark((function e() {
                        var t, n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s([]), e.next = 1, _c.getSlice(c.offset, c.size);
                                case 1:
                                    t = e.sent, n = t.items, t.total, n && (n.map((function(e) {
                                        return !!e.extraInfo && (e.filename = JSON.parse("".concat(e.extraInfo)).filename, !0)
                                    })), s(n.filter((function(e) {
                                        return e.name.toLowerCase().includes("zac") || e.name.toLowerCase().includes("essay")
                                    }))));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return r.a.createElement("div", null, r.a.createElement("div", {
                    className: "d-flex flex-row justify-content-between"
                }, r.a.createElement("h4", {
                    className: "text-xl font-bold"
                }, "List of exporting essays"), r.a.createElement(Mt.Button, {
                    type: "primary",
                    size: "small",
                    onClick: o
                }, r.a.createElement(or.a, {
                    icon: sr.o,
                    className: "mr-1"
                }), " Fetch")), r.a.createElement("hr", {
                    className: "mb-6 mt-2"
                }), i && i.length > 0 ? r.a.createElement(yr, null, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement(yr.Column, {
                    head: !0
                }, "Name"), r.a.createElement(yr.Column, {
                    head: !0
                }, "File"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Domain"), r.a.createElement(yr.Column, {
                    head: !0
                }, "Status"))), r.a.createElement("tbody", null, i.map((function(e) {
                    return r.a.createElement("tr", {
                        className: "mb-2",
                        key: e.id
                    }, r.a.createElement(yr.Column, null, e.name), r.a.createElement(yr.Column, null, e.status === Dc && r.a.createElement(jc, {
                        endpoint: "/api/zac_monitor?option=download_exported&filename=".concat(encodeURIComponent(e.filename)),
                        file: e
                    })), r.a.createElement(yr.Column, null, e.domain), r.a.createElement(yr.Column, null, function(e) {
                        switch (e) {
                            case Tc:
                                return r.a.createElement(Mt.Tag, {
                                    type: "gray"
                                }, "Init");
                            case Ic:
                                return r.a.createElement(Mt.Tag, {
                                    type: "primary"
                                }, "In progress");
                            case Ac:
                                return r.a.createElement(Mt.Tag, {
                                    type: "danger"
                                }, "Fail");
                            case Dc:
                                return r.a.createElement(Mt.Tag, {
                                    type: "success"
                                }, "Done")
                        }
                    }(e.status)))
                })))) : "Empty")
            };

            function Rc() {
                var e = Object(l.useLocation)().search,
                    t = new URLSearchParams(e).get("tab"),
                    n = Object(a.useState)(t || "1"),
                    c = y()(n, 2),
                    u = c[0],
                    i = c[1];
                return r.a.createElement("div", {
                    className: "monitor-container"
                }, r.a.createElement(Mt.Tabs, {
                    onTabClick: function(e) {
                        return t = e.props.name,
                            function() {
                                return i(t)
                            };
                        var t
                    },
                    activeName: u
                }, r.a.createElement(Mt.Tabs.Pane, {
                    label: "Multiple Choices Handler",
                    name: "1",
                    style: {
                        minHeight: "80vh"
                    }
                }, r.a.createElement(vc, null)), r.a.createElement(Mt.Tabs.Pane, {
                    label: "Log",
                    name: "2"
                }, r.a.createElement(sc, null)), r.a.createElement(Mt.Tabs.Pane, {
                    label: "Essay Handler",
                    name: "3"
                }, r.a.createElement(xc, null)), r.a.createElement(Mt.Tabs.Pane, {
                    label: "Statistic",
                    name: "4"
                }, r.a.createElement(kc, null)), r.a.createElement(Mt.Tabs.Pane, {
                    label: "ZATest Statistic",
                    name: "5"
                }, r.a.createElement(Cc, null)), r.a.createElement(Mt.Tabs.Pane, {
                    label: "Exporting essays",
                    name: "6"
                }, r.a.createElement(Pc, null))))
            }
            var Lc = H,
                Mc = B;
            var Fc = function(e) {
                    var t = e.question,
                        n = e.index,
                        c = t.id,
                        u = t.content,
                        l = t.o1,
                        i = t.o2,
                        s = t.choice,
                        o = t.answer,
                        m = t.type,
                        p = function(e) {
                            e.id, e.value
                        },
                        f = Object(a.useMemo)((function() {
                            return Et()(u)
                        }), [u]);
                    return r.a.createElement("div", {
                        className: "sub-question"
                    }, r.a.createElement("div", {
                        className: "info"
                    }, r.a.createElement("strong", {
                        className: "mr-2"
                    }, n + 1, ". "), r.a.createElement("p", null, f)), r.a.createElement("div", {
                        className: "answers"
                    }, m === Lc.YES_NO && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        key: "".concat(c, "_").concat(l),
                        className: "answer-btn ml-2 ".concat(_.isEqual(s, o) && _.isEqual(s, String(Mc.YES_ANSWER)) || _.isEqual(o, String(Mc.YES_ANSWER)) ? " correct" : "".concat(_.isEqual(s, String(Mc.YES_ANSWER)) && !_.isEqual(s, o) ? " incorrect" : " ".concat(_.isEqual(s, String(Mc.YES_ANSWER)) ? " active" : " "))),
                        onClick: function() {
                            return p({
                                id: c,
                                value: Mc.YES_ANSWER
                            })
                        }
                    }, r.a.createElement("div", null, l)), r.a.createElement("div", {
                        key: "".concat(c, "_").concat(i),
                        className: "answer-btn ml-2 ".concat(_.isEqual(s, o) && _.isEqual(s, String(Mc.NO_ANSWER)) || _.isEqual(o, String(Mc.NO_ANSWER)) ? " correct" : "".concat(_.isEqual(s, String(Mc.NO_ANSWER)) && !_.isEqual(s, o) ? " incorrect" : " ".concat(_.isEqual(s, String(Mc.NO_ANSWER)) ? " active" : " "))),
                        onClick: function() {
                            return p({
                                id: c,
                                value: Mc.NO_ANSWER
                            })
                        }
                    }, r.a.createElement("div", null, i))), m === Lc.MULTIPLE_CHOICE_2 && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        key: "".concat(c, "_").concat(l),
                        className: "answer-btn ml-2 ".concat(_.isEqual(s, o) && _.isEqual(s, String(Mc.A_ANSWER)) || _.isEqual(o, String(Mc.A_ANSWER)) ? " correct" : "".concat(_.isEqual(s, String(Mc.A_ANSWER)) && !_.isEqual(s, o) ? " incorrect" : " ".concat(_.isEqual(s, String(Mc.A_ANSWER)) ? " active" : " "))),
                        onClick: function() {
                            return p({
                                id: c,
                                value: Mc.A_ANSWER
                            })
                        }
                    }, r.a.createElement("div", null, l)), r.a.createElement("div", {
                        key: "".concat(c, "_").concat(i),
                        className: "answer-btn ml-2 ".concat(_.isEqual(s, o) && _.isEqual(s, String(Mc.B_ANSWER)) || _.isEqual(o, String(Mc.B_ANSWER)) ? " correct" : "".concat(_.isEqual(s, String(Mc.B_ANSWER)) && !_.isEqual(s, o) ? " incorrect" : " ".concat(_.isEqual(s, String(Mc.B_ANSWER)) ? " active" : " "))),
                        onClick: function() {
                            return p({
                                id: c,
                                value: Mc.B_ANSWER
                            })
                        }
                    }, r.a.createElement("div", null, i)))))
                },
                Uc = H,
                qc = B;

            function Bc(e) {
                var t = e.question,
                    n = void 0 === t ? {} : t,
                    c = Object(s.c)((function(e) {
                        return e.test.multipleChoiceId
                    })),
                    u = n.id,
                    l = n.content,
                    i = n.image,
                    o = n.audio,
                    m = n.o1,
                    p = n.o2,
                    f = n.o3,
                    d = n.o4,
                    E = n.o5,
                    b = n.o6,
                    v = n.type,
                    h = n.smalls,
                    g = n.choice,
                    y = n.answer,
                    O = Object(a.useMemo)((function() {
                        return Et()(l)
                    }), [l]);

                function x(e) {
                    var t = e.which || e.keyCode; - 1 !== [Zt, Vt, Kt, Jt].indexOf(t) && e.preventDefault()
                }
                var S = function(e) {
                    e.id, e.value
                };
                return r.a.createElement("div", {
                    className: "question-board"
                }, r.a.createElement("div", {
                    className: "quest mb-5"
                }, r.a.createElement("span", {
                    className: "quest-text m-bottom-30"
                }, O), i && r.a.createElement(fn, {
                    style: {
                        margin: "0 auto"
                    },
                    src: i,
                    alt: "ZA Challenge"
                }), o && r.a.createElement("audio", {
                    className: "quest-audio",
                    controls: !0
                }, r.a.createElement("source", {
                    src: o,
                    type: "audio/mpeg"
                }), "Your browser does not support the audio element.")), r.a.createElement("div", {
                    className: "answer one-col"
                }, r.a.createElement("form", null, r.a.createElement(r.a.Fragment, null, (v === Uc.MULTIPLE_CHOICE_4 || v === Uc.MULTIPLE_CHOICE_5 || v === Uc.MULTIPLE_CHOICE_6) && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, "1") || _.isEqual(y, "1") ? " correct" : "".concat(_.isEqual(g, "1") && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, "1"),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: 1
                        })
                    }
                }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "A"), r.a.createElement("p", null, m)))), r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, "2") || _.isEqual(y, "2") ? " correct" : "".concat(_.isEqual(g, "2") && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, "2"),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: 2
                        })
                    }
                }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "B"), r.a.createElement("p", null, p)))), r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, "3") || _.isEqual(y, "3") ? " correct" : "".concat(_.isEqual(g, "3") && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, "3"),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: 3
                        })
                    }
                }), r.a.createElement("label", null, " ", r.a.createElement("span", null, "C"), r.a.createElement("p", null, f)))), r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, "4") || _.isEqual(y, "4") ? " correct" : "".concat(_.isEqual(g, "4") && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, "4"),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: 4
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "D"), r.a.createElement("p", null, d)))), r.a.createElement(r.a.Fragment, null, Uc.MULTIPLE_CHOICE_5 === v && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, "5") || _.isEqual(y, "5") ? " correct" : "".concat(_.isEqual(g, "5") && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, "5"),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: 5
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "E"), r.a.createElement("p", null, E))))), Uc.MULTIPLE_CHOICE_6 === v && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, "6") || _.isEqual(y, "6") ? " correct" : "".concat(_.isEqual(g, "6") && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, "6"),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: 6
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "F"), r.a.createElement("p", null, b)))))))), Uc.SHORT_ANSWER === v && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups"
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    style: {
                        paddingLeft: "0"
                    },
                    className: "input-m",
                    type: "text",
                    value: 0 !== g && "0" !== g ? g : "",
                    onChange: function(e) {
                        return S({
                            id: u,
                            value: e.target.value
                        })
                    },
                    placeholder: "Nh\u1eadp c\xe2u tr\u1ea3 l\u1eddi / Your anwser"
                })))), Uc.YES_NO === v && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, String(qc.YES_ANSWER)) || _.isEqual(y, String(qc.YES_ANSWER)) ? " correct" : "".concat(_.isEqual(g, String(qc.YES_ANSWER)) && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, String(qc.YES_ANSWER)),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: qc.YES_ANSWER
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "A"), r.a.createElement("p", null, m)))), r.a.createElement("div", {
                    className: "form-groups" + (_.isEqual(g, y) && _.isEqual(g, String(qc.NO_ANSWER)) || _.isEqual(y, String(qc.NO_ANSWER)) ? " correct" : "".concat(_.isEqual(g, String(qc.NO_ANSWER)) && !_.isEqual(g, y) ? " incorrect" : ""))
                }, r.a.createElement("div", {
                    className: "bl-l"
                }, r.a.createElement("input", {
                    type: "radio",
                    checked: _.isEqual(g, String(qc.NO_ANSWER)),
                    onKeyDown: x,
                    onChange: function() {
                        return S({
                            id: u,
                            value: qc.NO_ANSWER
                        })
                    }
                }), r.a.createElement("label", null, r.a.createElement("span", null, "B"), r.a.createElement("p", null, p))))), Uc.TABLE === v && r.a.createElement(r.a.Fragment, null, h && r.a.createElement(r.a.Fragment, null, Array.from(h).map((function(e, t) {
                    return r.a.createElement(Fc, {
                        key: "".concat(c, "_").concat(e.id),
                        index: t,
                        question: e
                    })
                })))))))
            }

            function Hc() {
                var e = Object(l.useParams)().id,
                    t = Object(l.useHistory)(),
                    n = Object(a.useState)(!1),
                    c = y()(n, 2),
                    u = c[0],
                    i = c[1],
                    o = Object(a.useState)(),
                    m = y()(o, 2),
                    p = m[0],
                    f = m[1],
                    d = Object(a.useState)([]),
                    E = y()(d, 2),
                    b = E[0],
                    v = E[1],
                    g = Object(a.useState)(),
                    O = y()(g, 2),
                    S = O[0],
                    w = O[1],
                    N = Object(a.useState)(0),
                    k = y()(N, 2),
                    C = k[0],
                    j = k[1],
                    _ = Object(a.useRef)(null),
                    T = Object(s.b)();

                function I() {
                    return (I = h()(x.a.mark((function e(t) {
                        var n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i(!0), e.next = 1, ac.getTestResult(t);
                                case 1:
                                    (n = e.sent) && f(n), i(!1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function A(e) {
                    var t = e;
                    t < 0 ? t = 0 : t >= b.length && (t = b.length - 1), j(t)
                }
                Vn(_, (function() {
                    return setModalVisibility(!1)
                })), Object(a.useEffect)((function() {
                    T(Oe(!!u))
                }), [u]), Object(a.useEffect)((function() {
                    e > 0 && function(e) {
                        I.apply(this, arguments)
                    }(e)
                }), []), Object(a.useEffect)((function() {
                    Ct.isNil(p) || v(p.questions)
                }), [p]);
                var D = function(e) {
                    return Ct.isEqual(e, "0") ? "None" : Ct.isEqual(e, "1") ? "A" : Ct.isEqual(e, "2") ? "B" : Ct.isEqual(e, "3") ? "C" : Ct.isEqual(e, "4") ? "D" : Ct.isEqual(e, "5") ? "E" : e
                };
                return Object(a.useEffect)((function() {
                    Ct.isNil(b) || w(b[C])
                }), [b, C]), r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
                    role: "button",
                    style: {
                        marginLeft: "10px",
                        marginBottom: "10px",
                        color: "#0068FF"
                    },
                    onClick: function() {
                        return t.goBack()
                    }
                }, r.a.createElement("strong", null, "Back to monitor")), r.a.createElement("div", {
                    className: "question"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, S && r.a.createElement("div", {
                    className: "question-wrap"
                }, r.a.createElement("div", {
                    className: "bl-question-content"
                }, r.a.createElement("div", {
                    className: "bl-question-content-wrap",
                    style: {
                        borderWidth: "2px",
                        borderRadius: "8px",
                        borderStyle: "solid",
                        borderColor: S.isCorrect ? "#00FF00" : "#FF0000"
                    }
                }, r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "cover"
                }, function() {
                    var e = C - 1,
                        t = C + 1;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "next-prev"
                    }, C > 0 ? r.a.createElement("div", {
                        className: "btn-action btn-prev",
                        onClick: function() {
                            return A(e)
                        }
                    }, "C\xc2U TR\u01af\u1edaC ", r.a.createElement("span", null, e + 1)) : r.a.createElement("div", {
                        className: "btn-action btn-prev opacity-0\t"
                    }), r.a.createElement("h3", null, "C\xe2u s\u1ed1 ", r.a.createElement("span", null, C + 1)), C < b.length - 1 ? r.a.createElement("div", {
                        className: "btn-action btn-next",
                        onClick: function() {
                            return A(t)
                        }
                    }, r.a.createElement("span", null, t + 1), " C\xc2U SAU") : r.a.createElement("div", {
                        className: "btn-action btn-prev opacity-0\t"
                    })))
                }(), r.a.createElement(Bc, {
                    question: S
                }))))), r.a.createElement("div", {
                    className: "bl-question-rs-board",
                    style: {
                        maxWidth: "300px"
                    }
                }, r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "- Domain: ", r.a.createElement("b", null, p.domain)), r.a.createElement("p", null, "- T\u1ed5ng s\u1ed1 c\xe2u h\u1ecfi: ", r.a.createElement("b", null, p.totalQuestion)), r.a.createElement("p", null, "- T\u1ed5ng \u0111i\u1ec3m: ", r.a.createElement("b", null, p.totalScore)), r.a.createElement("p", null, "- S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi \u0111\xfang: ", r.a.createElement("b", null, p.totalCorrectQuestion)), r.a.createElement("p", null, "- S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi sai: ", r.a.createElement("b", null, p.totalIncorrectQuestion)), r.a.createElement("p", null, "- S\u1ed1 c\xe2u tr\u1ed1ng: ", r.a.createElement("b", null, p.emptyAnswer)), r.a.createElement("p", null, "- S\u1ed1 l\u1ea7n tho\xe1t m\xe0n h\xecnh: ", r.a.createElement("b", null, p.outFocus)), r.a.createElement("p", null, "- B\xe0i: ", r.a.createElement("b", null, p.sectionName)), r.a.createElement("p", {
                    style: {
                        wordBreak: "break-word"
                    }
                }, "- C\xe2u h\u1ecfi Group: ", JSON.stringify(p.totalGroupQuestion, null, "\t")), r.a.createElement("p", {
                    className: "might-overflow"
                }, "- C\xe2u h\u1ecfi Single: ", JSON.stringify(p.totalSingleQuestion, null, "\t")), r.a.createElement("p", {
                    style: {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }, "- C\xe2u h\u1ecfi Table: ", JSON.stringify(p.totalTableQuestion, null, "\t"))), r.a.createElement("hr", {
                    style: {
                        marginBottom: "12px",
                        marginTop: "12px"
                    }
                }), r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "C\xe2u h\u1ecfi s\u1ed1: ", r.a.createElement("b", null, S.id), r.a.createElement("ul", {
                    style: {
                        marginLeft: "12px"
                    }
                }, r.a.createElement("li", null, "- \u0110\xe1p \xe1n th\xed sinh ch\u1ecdn: ", r.a.createElement("b", null, D(S.choice))), r.a.createElement("li", null, "- \u0110\xe1p \xe1n \u0111\xfang: ", r.a.createElement("b", null, D(S.answer))), r.a.createElement("li", null, "- S\u1ed1 \u0111i\u1ec3m: ", r.a.createElement("b", null, S.volume))))))))))
            }
            var Wc = ["triettv", "dinhlh", "tyln"];
            var Yc = function() {
                var e = Object(s.b)(),
                    t = Object(s.c)((function(e) {
                        return e.common.user
                    }));
                return Object(a.useEffect)((function() {
                    "off" === tt.MONITOR && (window.location.href = "/no-active-session")
                }), []), Object(a.useEffect)((function() {
                    var n;

                    function a() {
                        return r.apply(this, arguments)
                    }

                    function r() {
                        return (r = h()(x.a.mark((function r() {
                            return x.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (t) {
                                            r.next = 1;
                                            break
                                        }
                                        return r.abrupt("return", new Promise((function(t, r) {
                                            Xn.login().then((function(n) {
                                                e(ye(n)), t(n)
                                            })).catch((function(e) {
                                                n = setTimeout(a, 3e3), r(e)
                                            }))
                                        })));
                                    case 1:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))).apply(this, arguments)
                    }
                    return a(),
                        function() {
                            return n && clearTimeout(n)
                        }
                }), [t]), Object(a.useEffect)((function() {
                    t && !Wc.includes(t.domain) && (window.location.href = "/denied")
                }), [t]), r.a.createElement(tc, {
                    user: t,
                    title: "Monitoring"
                }, r.a.createElement(l.Switch, null, r.a.createElement(l.Route, {
                    exact: !0,
                    path: "/monitor",
                    component: Rc
                }), r.a.createElement(l.Route, {
                    exact: !0,
                    path: f.TEST_RESULT.path,
                    component: Hc
                }), r.a.createElement(l.Redirect, {
                    to: "/monitor"
                })))
            };

            function zc() {
                return r.a.createElement("div", {
                    className: "loading"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "logo"
                }, r.a.createElement("img", {
                    src: Wt,
                    alt: "ZA Challenge"
                }))))
            }

            function Gc() {
                var e = ea();
                return r.a.createElement("div", {
                    className: "loading"
                }, r.a.createElement("div", {
                    className: "page-content"
                }, r.a.createElement("div", {
                    className: "logo"
                }, r.a.createElement("img", {
                    src: Wt,
                    alt: "ZA Challenge"
                })), r.a.createElement("span", {
                    className: "headline m-bottom-10 text-white"
                }, "\u0110\xe3 x\u1ea3y ra l\u1ed7i trong qu\xe1 tr\xecnh \u0111\u0103ng nh\u1eadp. Vui l\xf2ng h\xe3y th\u1eed", " ", r.a.createElement("a", {
                    href: "#!",
                    onClick: e
                }, "\u0111\u0103ng nh\u1eadp l\u1ea1i"))))
            }
            var Zc = {
                    getSystemTime: function() {
                        var e = h()(x.a.mark((function e() {
                            var t, n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.get("/common/systime");
                                    case 1:
                                        if (!(t = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if ((n = t.data).code !== We) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 2:
                                        return e.abrupt("return", (new Date).getTime());
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    saveStorage: function() {
                        var e = h()(x.a.mark((function e(t) {
                            var n, a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 1, lt.post(ot("external", "load_scored"), {
                                            scored: t
                                        }, {});
                                    case 1:
                                        if (!(n = e.sent)) {
                                            e.next = 2;
                                            break
                                        }
                                        if (!(a = n.data)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.data);
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                Kc = function() {
                    var e = Object(a.useState)("Unknown"),
                        t = y()(e, 2),
                        n = t[0],
                        c = t[1];

                    function u() {
                        return (u = h()(x.a.mark((function e(t) {
                            var n;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.next = 1, Zc.saveStorage(t);
                                    case 1:
                                        n = e.sent, c(n);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return Object(a.useEffect)((function() {
                        var e = "";
                        try {
                            e = JSON.stringify(function() {
                                for (var e = [], t = Object.entries(localStorage), n = 0, a = Object.entries(t); n < a.length; n++) {
                                    var r = y()(a[n], 2),
                                        c = (r[0], r[1]);
                                    e.push("".concat(c))
                                }
                                return e
                            }())
                        } catch (t) {
                            e = String(t)
                        }! function(e) {
                            u.apply(this, arguments)
                        }(e)
                    }), []), r.a.createElement("div", {
                        className: "loading"
                    }, r.a.createElement("div", {
                        className: "page-content"
                    }, r.a.createElement("div", {
                        className: "logo"
                    }, r.a.createElement("img", {
                        src: Wt,
                        alt: "ZA Challenge"
                    })), r.a.createElement("h2", {
                        style: {
                            textAlign: "center"
                        }
                    }, n)))
                };

            function Vc() {
                return r.a.createElement(l.Switch, null, r.a.createElement(l.Route, {
                    path: m.path,
                    component: nr
                }), r.a.createElement(l.Route, {
                    path: b,
                    component: Kc
                }), r.a.createElement(l.Route, {
                    path: p.path,
                    component: nc
                }), r.a.createElement(l.Route, {
                    path: f.path,
                    component: Yc
                }), r.a.createElement(l.Route, {
                    path: d,
                    component: zc
                }), r.a.createElement(l.Route, {
                    path: E,
                    component: Gc
                }), r.a.createElement(l.Route, {
                    path: o.path,
                    component: Fa
                }))
            }
            var Jc = {
                loadActive: function() {
                    var e = h()(x.a.mark((function e() {
                        var t, n;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 1, lt.get(ot("session", "load_active"));
                                case 1:
                                    if (!(t = e.sent)) {
                                        e.next = 2;
                                        break
                                    }
                                    if ((n = t.data).code !== We) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n.data);
                                case 2:
                                    return e.abrupt("return", null);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            };
            n(564), n(565);
            var Qc = function() {
                var e = Object(s.c)((function(e) {
                        return e.common.session
                    })),
                    t = Object(s.b)();
                return Object(a.useEffect)((function() {
                    document.addEventListener("contextmenu", (function(e) {
                        e.preventDefault()
                    }))
                }), []), Object(a.useEffect)((function() {
                    document.addEventListener("keydown", (function(e) {
                        e.keyCode === nn && e.preventDefault(), e.ctrlKey && e.shiftKey && e.keyCode === Xt && e.preventDefault(), e.ctrlKey && e.shiftKey && e.keyCode === Qt && e.preventDefault(), e.ctrlKey && e.shiftKey && e.keyCode === $t && e.preventDefault(), e.ctrlKey && e.keyCode === en && e.preventDefault()
                    }))
                }), []), Object(a.useEffect)((function() {
                    e || Jc.loadActive().then((function(e) {
                        t(function(e) {
                            return {
                                type: G,
                                payload: e
                            }
                        }(e))
                    }))
                }), [e]), r.a.createElement(r.a.Fragment, null, e ? r.a.createElement(Vc, null) : r.a.createElement(oa, null))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var Xc = n(43);
            n(193);

            function $c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function eu(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $c(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var tu = {
                user: null,
                session: null,
                videoSrc: null,
                loading: !1,
                wsClient: null,
                layoutStatus: -1
            };

            function nu(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function au(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nu(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nu(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ru = {
                submission: {},
                submissionId: 0,
                multipleChoiceId: 0,
                multipleChoiceIds: [],
                essayId: 0,
                preloadedMultipleChoices: null,
                questions: [],
                choices: {},
                preferences: {
                    marks: {}
                },
                preQuestionState: {},
                currentVal: null,
                relaxTime: null,
                bonusTime: null,
                section: {},
                multipleChoices: null
            };

            function cu(e) {
                return au(au({}, e), {}, {
                    multipleChoiceId: 0,
                    questions: [],
                    choices: {},
                    preferences: {
                        marks: {}
                    },
                    preQuestionState: {},
                    currentVal: null,
                    current_section: null
                })
            }

            function uu(e) {
                return au(au({}, e), {}, {
                    essayId: 0
                })
            }

            function lu(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function iu(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lu(Object(n), !0).forEach((function(t) {
                        A()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lu(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var su = U,
                ou = {
                    examinerId: -1,
                    isCalibrator: !1,
                    calibratedEssays: [],
                    filterConfig: {}
                };

            function mu(e, t) {
                var n = t.id,
                    a = t.scores,
                    r = e.filter((function(e) {
                        return e.id === n
                    }));
                if (r && r.length > 0) {
                    var c = r[0],
                        u = e.indexOf(c),
                        l = iu(iu({}, c), {}, {
                            calibratedScores: a,
                            examiningStatus: su.CALIBRATED
                        });
                    return e.reduce((function(e, t, n) {
                        return n === u ? e.push(iu({}, l)) : e.push(iu({}, t)), e
                    }), [])
                }
                return e
            }
            var pu = Object(Xc.b)({
                    common: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tu,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = eu({}, e),
                            a = t.payload;
                        switch (t.type) {
                            case z:
                                n.user = a;
                                break;
                            case G:
                                n.session = a;
                                break;
                            case Z:
                                n.videoSrc = a;
                                break;
                            case K:
                                n.loading = a;
                                break;
                            case V:
                                n.layoutStatus = a
                        }
                        return n
                    },
                    test: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ru,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.payload;
                        switch (t.type) {
                            case Q:
                                return au(au({}, e), {}, {
                                    submissionId: n.submissionId
                                });
                            case J:
                                return au(au({}, e), {}, {
                                    submission: n.submission
                                });
                            case $:
                                return au(au({}, e), {}, {
                                    multipleChoiceIds: n.multipleChoiceIds
                                });
                            case fe:
                                return au(au({}, e), {}, {
                                    section: n.section
                                });
                            case X:
                                return au(au({}, e), {}, {
                                    multipleChoiceId: n.multipleChoiceId
                                });
                            case ee:
                                return au(au({}, e), {}, {
                                    essayId: n.essayId
                                });
                            case te:
                                return au(au({}, e), {}, {
                                    preloadedMultipleChoices: n.preloadedMultipleChoices
                                });
                            case ne:
                                return au(au({}, e), {}, {
                                    questions: n
                                });
                            case ae:
                                return au(au({}, e), {}, {
                                    choices: n.choices
                                });
                            case re:
                                return au(au({}, e), {}, {
                                    choices: au(au({}, e.choices), {}, A()({}, n.id, n.option))
                                });
                            case ue:
                                return au(au({}, e), {}, {
                                    preferences: au(au({}, e.preferences), {}, {
                                        marks: n.marks
                                    })
                                });
                            case ce:
                                var a = e.preferences.marks[n.index];
                                return au(au({}, e), {}, {
                                    preferences: au(au({}, e.preferences), {}, {
                                        marks: au(au({}, e.preferences.marks), {}, A()({}, n.index, !a))
                                    })
                                });
                            case le:
                                return au(au({}, e), {}, {
                                    preQuestionState: {
                                        id: n.id,
                                        val: n.val
                                    }
                                });
                            case ie:
                                return au(au({}, e), {}, {
                                    currentVal: n
                                });
                            case se:
                                return cu(e);
                            case oe:
                                return uu(e);
                            case me:
                                return au(au({}, e), {}, {
                                    relaxTime: n.relaxTime
                                });
                            case pe:
                                return au(au({}, e), {}, {
                                    bonusTime: n.bonusTime
                                });
                            case ge:
                                return au(au({}, e), {}, {
                                    multipleChoices: n.multipleChoices
                                });
                            default:
                                return e
                        }
                    },
                    examine: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ou,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = iu({}, e),
                            a = t.payload;
                        switch (t.type) {
                            case de:
                                n.examinerId = a;
                                break;
                            case Ee:
                                n.isCalibrator = a;
                                break;
                            case be:
                                n.calibratedEssays = a;
                                break;
                            case ve:
                                return iu(iu({}, e), {}, {
                                    calibratedEssays: mu(e.calibratedEssays, {
                                        id: a.id,
                                        scores: a.scores
                                    })
                                });
                            case he:
                                return iu(iu({}, e), {}, {
                                    filterConfig: iu({}, a)
                                })
                        }
                        return n
                    }
                }),
                fu = n(120);
            var du = function(e) {
                    var t = [fu.a];
                    return Object(Xc.d)(pu, e, Object(Xc.c)(Xc.a.apply(void 0, t)))
                },
                Eu = (n(570), n(571), du()),
                bu = Object(i.createBrowserHistory)();
            u.a.render(r.a.createElement(l.Router, {
                history: bu
            }, r.a.createElement(s.a, {
                store: Eu
            }, r.a.createElement(Qc, null))), document.getElementById("app-zachallenge")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [572, 3, 0, 2]
    ]
]);