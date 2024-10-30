"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const BeSearchForm = () => {
    const searchForm = (w) => {
        function submit(){
            var url = arguments[1];
            window.open(url,'_blank');
            return false;
        }

        !function(e,n){
            var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
            if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                    a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
                    ["my-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])}
        }(w, [
            ["setContext", "BE-INT-doublelvilla_2024-08-17", "en"],
            ["embed", "search-form", {
                container: "be-search-form",
                onsubmit: submit
            }]
        ]);
    }

    const { pathname } = useRouter();

    useEffect(() => {
        searchForm(window);
    }, [pathname]);

    return (
        <div id="block-search">
            <div id="be-search-form" className="be-container">
                <a href="https://exely.com/" rel="nofollow" target="_blank">Hotel management software</a>
            </div>
        </div>
    )
}

export default BeSearchForm