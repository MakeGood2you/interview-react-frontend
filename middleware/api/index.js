"use strict"
export const fetcher = (url) => fetch(url).then((res) => res.json())
