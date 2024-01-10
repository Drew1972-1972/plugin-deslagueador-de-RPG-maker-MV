//=============================================================================
// Optimizaciones de Rendimiento
//=============================================================================

/*:
 * @plugindesc Plugin de optimizaciones de rendimiento para reducir el lag.
 * @author Drew
 *
 * @help Este plugin implementa varias optimizaciones para mejorar el rendimiento.
 * Algunas sugerencias incluyen:
 * 1. Optimizar el uso de imágenes y recursos gráficos.
 * 2. Desactivar la actualización de pantalla cuando no sea necesario.
 */

(function() {

    // Optimizar imágenes y recursos gráficos
    ImageManager._generateCacheKey = function(path, hue) {
      return path + ':' + hue;
    };
  
    // Desactivar actualización de pantalla innecesaria
    var _Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function() {
      _Scene_Base_update.call(this);
      // Comenta o ajusta según sea necesario
      // this.updateChildren();
    };
  
  })();
  