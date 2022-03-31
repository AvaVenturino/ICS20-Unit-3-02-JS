// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a triangle.
 */
function calculate () {
  // input
  const baseA = parseInt(document.getElementById("base-A").value)
  const baseB = parseInt(document.getElementById("base-B").value)
  const height = parseInt(document.getElementById("height-of-trapezoid").value)
  // process
  const area = [(baseA + baseB)/ 2] * height
  // output
  document.getElementById("area").innerHTML =
    "The area is: " + area + ' mm²' 
}
