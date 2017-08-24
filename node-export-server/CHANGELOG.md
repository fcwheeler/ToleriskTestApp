# 2.0.0
  * Fixed Phantom cleanup: instead of reaping every 2.5s, workers are checked for timeout when other work is posted.
  * Added additional error handlers to
    * `hhtp(s)Server`, `process`
  * Worker busy check before restarting
  * Now checking if the client connection is still open before sending returns
  * Changed return codes for error conditions
  * Misc stability fixes

# 1.0.15
  * Fixed an issue with SVG export

# 1.0.12

  * Fixed an issue with `--batch` exporting
  
# 1.0.11

  * Fixed an issue with `themeOptions` when using CLI mode
  * Added `listenToProcessExits` option to pool.init(..)
  * Exposed `listenToProcessExits` in CLI mode
  * Fixed issue with `--callback` when the callback was a file

# 1.0.10

  * Fixed an issue with batch exporting
  * Fixed `uuid` dependency version (thanks to @tonylukasavage)

# 1.0.9
    
  * Set minimum node version to 5.10.0

# 1.0.8
 
 * Fixed `phantomjs-prebuilt` dependency version
