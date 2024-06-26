// import scrollCenter from "../behaviors/scrollCenter";
// Component({
//     behaviors: [scrollCenter],
//     externalClasses: ["l-class", "l-header-class", "l-class-active", "l-active-class", "l-class-inactive", "l-inactive-class", "l-class-tabimage", "l-tab-image-class", "l-class-header-line", "l-header-line-class", "l-class-line", "l-line-class", "l-class-icon", "l-icon-class", "l-class-badge", "l-badge-class"],
//     options: {
//         multipleSlots: !0,
//         pureDataPattern: /^_/
//     },
//     relations: {
//         "../segment-item/index": {
//             type: "child",
//             linked(e) {
//                 this.initTabs(e)
//             }
//         }
//     },
//     properties: {
//         activeKey: {
//             type: String,
//             value: "",
//             observer: "changeCurrent"
//         },
//         placement: {
//             type: String,
//             value: "top"
//         },
//         scrollable: Boolean,
//         hasLine: {
//             type: Boolean,
//             value: !0
//         },
//         animatedForLine: Boolean,
//         activeColor: {
//             type: String
//         },
//         inactiveColor: {
//             type: String
//         },
//         equalWidth: {
//             type: Boolean,
//             value: !0
//         },
//         even: {
//             type: Boolean,
//             value: !0
//         },
//         width: Number,
//         height: Number,
//         itemHeight: Number,
//         itemWidth: Number
//     },
//     observers: {
//         activeKey: function (e) {
//             if (!e) return;
//             const t = this.data.tabList.findIndex(t => t.key === e);
//             this.setData({
//                 currentIndex: t
//             }, () => {
//                 this.data.scrollable && this.queryMultipleNodes()
//             })
//         }
//     },
//     data: {
//         _cells: [],
//         tabList: [],
//         currentIndex: 0,
//         _segmentItemInstances: []
//     },
//     methods: {
//         initTabs(e) {
//             const t = this.data.activeKey;
//             let a = this.getRelationNodes("../segment-item/index");
//             if (a.length > 0) {
//                 if (a.length === this.data.tabList.length && this.data._segmentItemInstances.indexOf(e) > 0) return;
//                 let s = t,
//                     l = this.data.currentIndex,
//                     i = [];
//                 const n = a.map((e, a) => (s = t || 0 !== a ? s : e.data.key, l = e.data.key === s ? a : l, i[a] = e.dataset.cell, {
//                     ...e.data
//                 }));
//                 this.setData({
//                     _cells: i,
//                     activeKey: s,
//                     tabList: n,
//                     currentIndex: l,
//                     _segmentItemInstances: a
//                 }, () => {
//                     this.data.scrollable && this.queryMultipleNodes()
//                 })
//             }
//         },
//         handleChange(e) {
//             const t = e.currentTarget.dataset.key,
//                 a = e.currentTarget.dataset.index;
//             this._setChangeData({
//                 activeKey: t,
//                 currentIndex: a
//             })
//         },
//         _setChangeData({
//             activeKey: e,
//             currentIndex: t
//         }) {
//             this.setData({
//                 activeKey: e,
//                 currentIndex: t
//             }, () => {
//                 this.data.scrollable && this.queryMultipleNodes()
//             }), this.triggerEvent("linchange", {
//                 activeKey: e,
//                 currentIndex: t,
//                 cell: this.data._cells[t]
//             })
//         }
//     }
// });