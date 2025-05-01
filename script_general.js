(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","gap":10,"definitions": [{"data":{"name":"Image4995"},"width":80,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"paddingLeft":0,"top":21.17,"verticalAlign":"top","paddingRight":0,"height":85,"toolTipHorizontalAlign":"center","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"class":"Image","borderRadius":0,"left":26.3,"borderSize":0,"minWidth":80,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"data":{"name":"button menu sup"},"gap":10,"width":110,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"visible","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"middle","bottom":"4.6%","paddingRight":0,"height":110,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"horizontal","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"scrollBarColor":"#000000","class":"Container","creationPolicy":"inAdvance","borderSize":0,"right":"0%","minWidth":1,"shadow":false,"minHeight":1},{"data":{"name":"--SETTINGS"},"gap":10,"width":85,"backgroundOpacity":0,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingTop":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"17.26%","paddingRight":0,"height":430,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":430,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":430,"right":"1.22%"},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_t.jpg"}],"thumbnailUrl":"media/panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49","yaw":43.86,"select":"this.overlay_9B62B174_8BD3_212B_41D2_84F3C788C0AC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9B62B174_8BD3_212B_41D2_84F3C788C0AC"},"distance":3.03,"class":"AdjacentPanorama","backwardYaw":9.69}],"hfovMin":"120%","overlays":["this.overlay_9B62B174_8BD3_212B_41D2_84F3C788C0AC"],"pitch":0,"id":"panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95","label":trans('panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"SALON TV"},"partial":false,"vfov":180},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_camera"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_camera","media":"this.panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_camera","media":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_camera","media":"this.panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_82166974_8BCE_E12B_41CF_09E6C3563153_camera","media":"this.panorama_82166974_8BCE_E12B_41CF_09E6C3563153"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"minWidth":20,"itemLabelFontStyle":"normal","itemLabelTextDecoration":"none","left":"0.01%","gap":10,"rollOverItemLabelFontWeight":"normal","itemThumbnailShadowHorizontalLength":3,"itemThumbnailShadowSpread":1,"backgroundOpacity":0,"itemThumbnailShadowVerticalLength":3,"paddingTop":10,"itemLabelFontColor":"#FFFFFF","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemThumbnailShadowBlurRadius":8,"horizontalAlign":"left","itemLabelPosition":"bottom","playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","paddingBottom":10,"propagateClick":false,"data":{"name":"ThumbnailList35762"},"itemMode":"normal","itemVerticalAlign":"middle","itemThumbnailWidth":75,"paddingLeft":20,"itemBackgroundColor":[],"scrollBarMargin":2,"itemThumbnailShadow":true,"itemHorizontalAlign":"center","verticalAlign":"top","bottom":"0.02%","paddingRight":20,"itemPaddingLeft":3,"itemOpacity":1,"toolTipHorizontalAlign":"center","itemLabelFontWeight":"normal","itemBorderRadius":0,"height":135.02,"scrollBarOpacity":0.5,"itemPaddingTop":3,"itemPaddingRight":3,"itemLabelHorizontalAlign":"center","itemLabelFontSize":14,"itemBackgroundOpacity":0,"layout":"horizontal","itemLabelFontFamily":"Arial","itemThumbnailScaleMode":"fit_outside","scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":5,"rollOverItemBackgroundOpacity":0,"selectedItemLabelFontColor":"#FFCC00","itemBackgroundColorDirection":"vertical","scrollBarColor":"#FFFFFF","class":"ThumbnailList","itemThumbnailBorderRadius":50,"itemBackgroundColorRatios":[],"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemThumbnailShadowColor":"#000000","borderSize":0,"right":"0.12%","itemThumbnailHeight":75,"itemLabelGap":9,"itemPaddingBottom":3,"shadow":false,"minHeight":20,"itemThumbnailShadowOpacity":0.54},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"right":0,"toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0,1],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderColor":"#AAAAAA","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#999999","progressBackgroundColorRatios":[0,1],"playbackBarBorderSize":2,"toolTipFontSize":12,"subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#666666","progressRight":10,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeight":20,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#222222","#444444"],"progressBorderColor":"#AAAAAA","doubleClickAction":"toggle_fullscreen","class":"ViewerArea","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderRadius":4,"progressBarOpacity":1,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","progressBottom":1,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"progressHeight":20,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"toolTipFontStyle":"normal","progressBorderSize":2,"paddingTop":0,"progressBarBorderRadius":4,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":30,"playbackBarHeadBackgroundColorRatios":[0,1],"top":0,"surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":1500,"subtitlesBorderSize":0,"bottom":0,"subtitlesBottom":50,"toolTipFontWeight":"normal","toolTipShadowColor":"#333333","subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","progressLeft":10,"playbackBarProgressBorderRadius":0,"subtitlesPaddingRight":5,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":0.5,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":10,"left":0,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_camera","media":"this.panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_camera","media":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95_camera","media":"this.panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_82166974_8BCE_E12B_41CF_09E6C3563153_camera","media":"this.panorama_82166974_8BCE_E12B_41CF_09E6C3563153","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_t.jpg"}],"thumbnailUrl":"media/panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49","yaw":-99.2,"select":"this.overlay_9BFA21D1_8BD1_616D_41E1_33A7942C66BE.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9BFA21D1_8BD1_616D_41E1_33A7942C66BE"},"distance":1.21,"class":"AdjacentPanorama","backwardYaw":-152.27}],"hfovMin":"120%","overlays":["this.overlay_9BFA21D1_8BD1_616D_41E1_33A7942C66BE"],"pitch":0,"id":"panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3","label":trans('panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"CHAMBRE"},"partial":false,"vfov":180},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3_camera"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_82166974_8BCE_E12B_41CF_09E6C3563153_camera"},{"data":{"name":"-button set"},"gap":3,"width":85,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"14%","paddingRight":0,"height":320,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"vertical","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":320,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":320,"right":"0%"},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_t.jpg"}],"thumbnailUrl":"media/panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_821640B5_8BCF_1F15_41D3_A601A1CAAE95","yaw":9.69,"select":"this.overlay_9B9B7EEF_8BD7_2335_41BC_820ED9330000.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9B9B7EEF_8BD7_2335_41BC_820ED9330000"},"distance":0.56,"class":"AdjacentPanorama","backwardYaw":43.86},{"panorama":"this.panorama_82166974_8BCE_E12B_41CF_09E6C3563153","yaw":-31.55,"select":"this.overlay_85E75F5D_8BD3_2115_41DD_95748B1399A4.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_85E75F5D_8BD3_2115_41DD_95748B1399A4"},"distance":0.93,"class":"AdjacentPanorama","backwardYaw":-33.75},{"panorama":"this.panorama_812BFFC5_8BCF_216A_41CA_59775B390CB3","yaw":-152.27,"select":"this.overlay_9BDA5E46_8BD7_6377_41C0_02655DAA80F6.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9BDA5E46_8BD7_6377_41C0_02655DAA80F6"},"distance":1.02,"class":"AdjacentPanorama","backwardYaw":-99.2}],"hfovMin":"120%","overlays":["this.overlay_85E75F5D_8BD3_2115_41DD_95748B1399A4","this.overlay_9BDA5E46_8BD7_6377_41C0_02655DAA80F6","this.overlay_9B9B7EEF_8BD7_2335_41BC_820ED9330000"],"pitch":0,"id":"panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49","label":trans('panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"ENTREE"},"partial":false,"vfov":180},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_t.jpg"}],"thumbnailUrl":"media/panorama_82166974_8BCE_E12B_41CF_09E6C3563153_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_8213B8D8_8BCF_2F1A_41D0_5F89D9A9BD49","yaw":-33.75,"select":"this.overlay_9B1B6D51_8BD1_616D_41C3_E7FCDDE99DA2.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9B1B6D51_8BD1_616D_41C3_E7FCDDE99DA2"},"distance":3.7,"class":"AdjacentPanorama","backwardYaw":-31.55}],"hfovMin":"400%","overlays":["this.overlay_9B1B6D51_8BD1_616D_41C3_E7FCDDE99DA2"],"pitch":0,"id":"panorama_82166974_8BCE_E12B_41CF_09E6C3563153","label":trans('panorama_82166974_8BCE_E12B_41CF_09E6C3563153.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"SEJOUR"},"partial":false,"vfov":180},{"fontWeight":"bold","data":{"name":"Label28174"},"textDecoration":"none","width":280,"backgroundOpacity":0,"paddingTop":0,"id":"label4056","fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"verticalAlign":"middle","top":23,"paddingRight":0,"fontColor":"#FFFFFF","height":50,"toolTipHorizontalAlign":"center","text":trans('label4056.text'),"fontSize":30,"borderRadius":0,"maxHeight":50,"class":"Label","maxWidth":280,"fontStyle":"normal","borderSize":0,"minWidth":280,"shadow":false,"minHeight":50,"right":"1.39%"},{"areas":["this.HotspotPanoramaOverlayArea_9B6E9174_8BD3_212B_41DB_9E41A6410C4C"],"maps":[],"items":[{"vfov":6,"roll":-63.3,"pitch":-29.3,"image":"this.AnimatedImageResource_9AE169F9_8BD3_211D_4187_7DDD837DB51E","distance":100,"yaw":43.86,"rotationY":-59.49,"rotationX":-11.28,"hfov":6,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"verticalAlign":"middle","scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9B62B174_8BD3_212B_41D2_84F3C788C0AC"},{"areas":["this.HotspotPanoramaOverlayArea_9BE121D1_8BD1_616D_41DE_6230247039D7"],"maps":[],"items":[{"vfov":6,"roll":57.89,"pitch":-54.6,"image":"this.AnimatedImageResource_9AEE19F9_8BD3_211D_41D5_01D12DE88847","distance":100,"yaw":-99.2,"rotationY":34.15,"rotationX":-26.44,"hfov":6,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"verticalAlign":"middle","scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9BFA21D1_8BD1_616D_41E1_33A7942C66BE"},{"areas":["this.HotspotPanoramaOverlayArea_855B4F87_8BD3_21F6_41DC_8E5548EB8143"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9AE1E9F9_8BD3_211D_41DB_F087EED1B687","distance":100,"yaw":-31.55,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":3.69,"verticalAlign":"middle","pitch":-61.38,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_85E75F5D_8BD3_2115_41DD_95748B1399A4"},{"areas":["this.HotspotPanoramaOverlayArea_9BD8AE47_8BD7_6375_41BE_7E12571B0613"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9AE189F9_8BD3_211D_41DF_3E987338BC2D","distance":100,"yaw":-152.27,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":65.66,"verticalAlign":"middle","pitch":-59.11,"vfov":6.2}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9BDA5E46_8BD7_6377_41C0_02655DAA80F6"},{"areas":["this.HotspotPanoramaOverlayArea_9B9F4EF1_8BD7_232D_41D9_37B89BEE04ED"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9AE1A9F9_8BD3_211D_41DA_A8F06393B74D","distance":100,"yaw":9.69,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":-41.51,"verticalAlign":"middle","pitch":-71.9,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9B9B7EEF_8BD7_2335_41BC_820ED9330000"},{"areas":["this.HotspotPanoramaOverlayArea_9B04DD51_8BD1_616D_41B1_AC46323BD75C"],"maps":[],"items":[{"vfov":6,"roll":-13.63,"pitch":-24.68,"image":"this.AnimatedImageResource_9AE119F9_8BD3_211D_41CD_4DCAA2DD0121","distance":100,"yaw":-33.75,"rotationY":-25.4,"rotationX":-57.44,"hfov":6,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"verticalAlign":"middle","scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9B1B6D51_8BD1_616D_41C3_E7FCDDE99DA2"},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9B6E9174_8BD3_212B_41DB_9E41A6410C4C"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9B519ED3_8BD1_236D_41B1_CB7EE02C7175_0.png"}],"colCount":3,"id":"AnimatedImageResource_9AE169F9_8BD3_211D_4187_7DDD837DB51E","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9BE121D1_8BD1_616D_41DE_6230247039D7"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9B519ED3_8BD1_236D_41B1_CB7EE02C7175_0.png"}],"colCount":3,"id":"AnimatedImageResource_9AEE19F9_8BD3_211D_41D5_01D12DE88847","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_855B4F87_8BD3_21F6_41DC_8E5548EB8143"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9B519ED3_8BD1_236D_41B1_CB7EE02C7175_0.png"}],"colCount":3,"id":"AnimatedImageResource_9AE1E9F9_8BD3_211D_41DB_F087EED1B687","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9BD8AE47_8BD7_6375_41BE_7E12571B0613"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9B519ED3_8BD1_236D_41B1_CB7EE02C7175_0.png"}],"colCount":3,"id":"AnimatedImageResource_9AE189F9_8BD3_211D_41DF_3E987338BC2D","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9B9F4EF1_8BD7_232D_41D9_37B89BEE04ED"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9B519ED3_8BD1_236D_41B1_CB7EE02C7175_0.png"}],"colCount":3,"id":"AnimatedImageResource_9AE1A9F9_8BD3_211D_41DA_A8F06393B74D","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9B04DD51_8BD1_616D_41B1_AC46323BD75C"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9B519ED3_8BD1_236D_41B1_CB7EE02C7175_0.png"}],"colCount":3,"id":"AnimatedImageResource_9AE119F9_8BD3_211D_41CD_4DCAA2DD0121","class":"AnimatedImageResource","frameDuration":62,"frameCount":9}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"defaultVRPointer":"gaze","mobileMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","desktopMipmappingEnabled":false,"layout":"absolute","height":"100%","backgroundColor":["#000000"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","class":"Player","scripts":{"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"translate":TDV.Tour.Script.translate,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlays":TDV.Tour.Script.getOverlays,"getKey":TDV.Tour.Script.getKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"downloadFile":TDV.Tour.Script.downloadFile,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizStart":TDV.Tour.Script.quizStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"init":TDV.Tour.Script.init,"historyGoForward":TDV.Tour.Script.historyGoForward,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"isPanorama":TDV.Tour.Script.isPanorama,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizFinish":TDV.Tour.Script.quizFinish,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"showWindow":TDV.Tour.Script.showWindow,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"existsKey":TDV.Tour.Script.existsKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"shareSocial":TDV.Tour.Script.shareSocial,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setLocale":TDV.Tour.Script.setLocale,"setMapLocation":TDV.Tour.Script.setMapLocation,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setValue":TDV.Tour.Script.setValue,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initQuiz":TDV.Tour.Script.initQuiz,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"mixObject":TDV.Tour.Script.mixObject,"textToSpeech":TDV.Tour.Script.textToSpeech},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist])","downloadEnabled":false,"creationPolicy":"inAdvance","borderSize":0,"data":{"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1},"initialScale":0.65},"minWidth":20,"shadow":false,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu May 1 2025