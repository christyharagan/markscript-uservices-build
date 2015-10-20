var g = require('./generator');
var u = require('uservices');
var fs = require('fs');
var path = require('path');
exports.uServicesPlugin = {
    generate: function (buildModel, options, pkgDir, typeModel) {
        var serviceSpecs;
        if (fs.existsSync(path.join(pkgDir, 'service-specs.json'))) {
            serviceSpecs = u.parse(fs.readFileSync(path.join(pkgDir, 'service-specs.json')).toString());
        }
        else if (!typeModel) {
            throw new Error('To build the uservices, either a service-spec.json must exist in the package directory, or a type model provided to generate one');
        }
        else {
            serviceSpecs = g.generateServiceSpecs(typeModel);
        }
        g.generateAssetModel(serviceSpecs, options.middle.host + ':' + options.middle.port, buildModel, pkgDir);
        return buildModel;
    },
    jsonify: function (buildModel) {
        return {
            serviceSpecs: u.stringify(buildModel.serviceSpecs)
        };
    }
};
//# sourceMappingURL=buildPlugin.js.map