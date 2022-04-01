// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a pyramid
 */
function calculate () {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width= parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)
  // process
  const volume = (length * width * height) / 3
  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + ' mm³' 
}
