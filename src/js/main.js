// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'




var largetypewrapper = document.querySelector('#largeglyphwrapper')
var largeglyph = document.querySelector('#largeglyph')
largeglyph.innerHTML = "A"
    // console.log(largeglyph)

function glyphsetup() {
    var uppercasegrid = document.querySelector(".Uppercase");
    var lowercasegrid = document.querySelector(".Lowercase");
    var numbergrid = document.querySelector(".Numbers");
    var puncgrid = document.querySelector(".Punctuation");

    // var characters1 = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
    var characters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < characters1.length; i++) {
        var divcard = document.createElement("div");
        uppercasegrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters1[i]);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters1[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);

        // if (i == 0) { // If this is the first divglyph
        //     div.style.backgroundColor = 'white';
        //     div.style.color = 'black';
        // }
    }

    // var characters2 = [a, b, c, d, e, f, g, h, characteri, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    var characters2 = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < characters2.length; i++) {
        var divcard = document.createElement("div");
        lowercasegrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters2[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters2[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters2[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);
    }

    // var characters3 = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];
    var characters3n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var characters3 = "0123456789";
    for (var i = 0; i < characters3.length; i++) {
        var divcard = document.createElement("div");
        numbergrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters3[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters3[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters3n[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);
    }

    // var characters4 = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35];
    var characters4 = [".", ",", ":", ";", "?", "!", "*", "_", "&", ",", "„", "‘", "’", '“', '”', "'", '"', "-", "–", "—", "/", "\\", "|", "(", ")", "[", "]", "{", "}", "•", "‹", "›", "«", "»", "@"];
    for (var i = 0; i < characters4.length; i++) {
        var divcard = document.createElement("div");
        puncgrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters4[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters4[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters4[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);
    }
}

glyphsetup()

let card = document.querySelectorAll('.typecard');
let previousElement = card[0]; // Hold reference to previously hovered element

// Function to apply hover style
function applyHoverStyle(element) {
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
}

// Function to remove hover style
function removeHoverStyle(element) {
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
}

// Apply hover style to the first element initially
applyHoverStyle(previousElement);

card.forEach(function(element) {
    element.addEventListener('mouseover', function(event) {
        // Remove hover style from previously hovered element
        removeHoverStyle(previousElement);

        // Apply hover style to currently hovered element
        applyHoverStyle(this);

        // Update the largeglyph's innerHTML
        largeglyph.innerHTML = this.getAttribute('data-name');

        // Update the previously hovered element reference
        previousElement = this;
    });
});


var elements = document.getElementsByClassName('typecard');
var currentElement = null;

function handleHover() {
    if (currentElement) {
        currentElement.style.backgroundColor = 'black';
        currentElement.style.color = 'white';
    }
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
    currentElement = this;
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', handleHover);
}


// // Event handler for mouseover
// function handleMouseOver(event) {
//     // Increase the size of the divcard when hovering over it
//     event.target.style.transform = 'scale(1.2)';
//     event.target.style.zIndex = '9999';
// }

// // Event handler for mouseout
// function handleMouseOut(event) {
//     // Reset the size and position of the divcard when the mouse leaves it
//     event.target.style.transform = '';
//     event.target.style.zIndex = '';
// }


/*
// import * as svgs from '../../public/*.svg';
import A from '../../public/A.svg';
import B from '../../public/B.svg';
import C from '../../public/C.svg';
import D from '../../public/D.svg';
import E from '../../public/E.svg';
import F from '../../public/F.svg';
import G from '../../public/G.svg';
import H from '../../public/H.svg';
import I from '../../public/I.svg';
import J from '../../public/G.svg';
import K from '../../public/K.svg';
import L from '../../public/L.svg';
import M from '../../public/M.svg';
import N from '../../public/N.svg';
import O from '../../public/O.svg';
import P from '../../public/P.svg';
import Q from '../../public/Q.svg';
import R from '../../public/R.svg';
import S from '../../public/S.svg';
import T from '../../public/T.svg';
import U from '../../public/U.svg';
import V from '../../public/V.svg';
import W from '../../public/W.svg';
import X from '../../public/X.svg';
import Y from '../../public/Y.svg';
import Z from '../../public/Z.svg';

import a from '../../public/lowercase/a.svg';
import b from '../../public/lowercase/b.svg';
import c from '../../public/lowercase/c.svg';
import d from '../../public/lowercase/d.svg';
import e from '../../public/lowercase/e.svg';
import f from '../../public/lowercase/f.svg';
import g from '../../public/lowercase/g.svg';
import h from '../../public/lowercase/h.svg';
import characteri from '../../public/lowercase/i.svg';
import j from '../../public/lowercase/j.svg';
import k from '../../public/lowercase/k.svg';
import l from '../../public/lowercase/l.svg';
import m from '../../public/lowercase/m.svg';
import n from '../../public/lowercase/n.svg';
import o from '../../public/lowercase/o.svg';
import p from '../../public/lowercase/p.svg';
import q from '../../public/lowercase/q.svg';
import r from '../../public/lowercase/r.svg';
import s from '../../public/lowercase/s.svg';
import t from '../../public/lowercase/t.svg';
import u from '../../public/lowercase/u.svg';
import v from '../../public/lowercase/v.svg';
import w from '../../public/lowercase/w.svg';
import x from '../../public/lowercase/x.svg';
import y from '../../public/lowercase/y.svg';
import z from '../../public/lowercase/z.svg';

import n0 from '../../public/n0.svg';
import n1 from '../../public/n1.svg';
import n2 from '../../public/n2.svg';
import n3 from '../../public/n3.svg';
import n4 from '../../public/n4.svg';
import n5 from '../../public/n5.svg';
import n6 from '../../public/n6.svg';
import n7 from '../../public/n7.svg';
import n8 from '../../public/n8.svg';
import n9 from '../../public/n9.svg';

import p1 from '../../public/p1.svg';
import p2 from '../../public/p2.svg';
import p3 from '../../public/p3.svg';
import p4 from '../../public/p4.svg';
import p5 from '../../public/p5.svg';
import p6 from '../../public/p6.svg';
import p7 from '../../public/p7.svg';
import p8 from '../../public/p8.svg';
import p9 from '../../public/p9.svg';
import p10 from '../../public/p10.svg';
import p11 from '../../public/p11.svg';
import p12 from '../../public/p12.svg';
import p13 from '../../public/p13.svg';
import p14 from '../../public/p14.svg';
import p15 from '../../public/p15.svg';
import p16 from '../../public/p16.svg';
import p17 from '../../public/p17.svg';
import p18 from '../../public/p18.svg';
import p19 from '../../public/p19.svg';
import p20 from '../../public/p20.svg';
import p21 from '../../public/p21.svg';
import p22 from '../../public/p22.svg';
import p23 from '../../public/p23.svg';
import p24 from '../../public/p24.svg';
import p25 from '../../public/p25.svg';
import p26 from '../../public/p26.svg';
import p27 from '../../public/p27.svg';
import p28 from '../../public/p28.svg';
import p29 from '../../public/p29.svg';
import p30 from '../../public/p30.svg';
import p31 from '../../public/p31.svg';
import p32 from '../../public/p32.svg';
import p33 from '../../public/p33.svg';
import p34 from '../../public/p34.svg';
import p35 from '../../public/p35.svg';
*/