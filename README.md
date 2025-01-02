# React Native Dimensions.get() Returns Undefined on Android

This repository demonstrates a common issue in React Native where `Dimensions.get('window')` or `Dimensions.get('screen')` returns `undefined` on Android, especially during initial app load.  The solution showcases how to handle this asynchronous behavior correctly.

## Bug Description:

The `Dimensions` API in React Native provides screen dimensions. However, on Android, these dimensions are not immediately available.  Accessing them synchronously might result in `undefined` values, causing crashes or unexpected behavior in your application.

## Solution:

The solution involves using the `useEffect` hook to fetch the dimensions after the component mounts and handling the potential `undefined` case.