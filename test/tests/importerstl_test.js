var assert = require ('assert');
var testFiles = require ('../utils/testfiles.js');
var testUtils = require ('../utils/testutils.js');

describe ('Stl Importer', function() {
    it ('single_triangle.stl', function () {
        var model = testFiles.ImportStlFile ('single_triangle.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObject (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : 'MeshName',
                    triangles : [
                        {
                            vertices : [0, 0, 0, 1, 0, 0, 1, 1, 0],
                            normals : [0, 0, 1, 0, 0, 1, 0, 0, 1],
                            uvs : [],
                            mat : 0
                        }
                    ]
                }
            ]
        });
    });

    it ('single_triangle_with_comments.stl', function () {
        var model = testFiles.ImportStlFile ('single_triangle_with_comments.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObject (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : 'MeshName',
                    triangles : [
                        {
                            vertices : [0, 0, 0, 1, 0, 0, 1, 1, 0],
                            normals : [0, 0, 1, 0, 0, 1, 0, 0, 1],
                            uvs : [],
                            mat : 0
                        }
                    ]
                }
            ]
        });
    });    

    it ('single_triangle_no_normal.stl', function () {
        var model = testFiles.ImportStlFile ('single_triangle_no_normal.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObject (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : 'MeshName',
                    triangles : [
                        {
                            vertices : [0, 0, 0, 1, 0, 0, 1, 1, 0],
                            normals : [0, 0, 1, 0, 0, 1, 0, 0, 1],
                            uvs : [],
                            mat : 0
                        }
                    ]
                }
            ]
        });
    });    

    it ('two_triangles.stl', function () {
        var model = testFiles.ImportStlFile ('two_triangles.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObject (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : 'MeshName',
                    triangles : [
                        {
                            vertices : [0, 0, 0, 1, 0, 0, 1, 1, 0],
                            normals : [0, 0, 1, 0, 0, 1, 0, 0, 1],
                            uvs : [],
                            mat : 0
                        },
                        {
                            vertices : [0, 0, 1, 1, 0, 1, 1, 1, 1],
                            normals : [0, 0, 1, 0, 0, 1, 0, 0, 1],
                            uvs : [],
                            mat : 0
                        }
                    ]
                }
            ]
        });
    });     

    it ('stl_ascii.stl', function () {
        var model = testFiles.ImportStlFile ('stl_ascii.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObjectSimple (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : 'Untitled-5427e5af',
                    vertexCount : 1716,
                    normalCount : 572,
                    uvCount : 0,
                    triangleCount : 572,
                    boundingBox : {
                        min : [0, -1.10792799192095, 0],
                        max : [4.94407346265022, 3.31831671830375, 1.2]
                    }
                }
            ]
        });
    });

    it ('stl_binary.stl', function () {
        var model = testFiles.ImportStlFile ('stl_binary.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObjectSimple (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : '',
                    vertexCount : 2184,
                    normalCount : 728,
                    uvCount : 0,
                    triangleCount : 728,
                    boundingBox : {
                        min : [0, -1.1079280376434326, 0],
                        max : [5.70156717300415, 3.318316698074341, 1.2000000476837158]
                    }
                }
            ]
        });
    });
    

    it ('cube_meshlab_ascii.stl', function () {
        var model = testFiles.ImportStlFile ('cube_meshlab_ascii.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObjectSimple (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : 'STL generated by MeshLab',
                    vertexCount : 36,
                    normalCount : 12,
                    uvCount : 0,
                    triangleCount : 12,
                    boundingBox : {
                        min : [0, 0, 0],
                        max : [1, 1, 1]
                    }
                }
            ]
        });
    });    

    it ('cube_meshlab_binary.stl', function () {
        var model = testFiles.ImportStlFile ('cube_meshlab_binary.stl');
        assert (OV.CheckModel (model));
        assert.deepStrictEqual (testUtils.ModelToObjectSimple (model), {
            name : '',
            materials : [
                { name : '' }
            ],
            meshes : [
                {
                    name : '',
                    vertexCount : 36,
                    normalCount : 12,
                    uvCount : 0,
                    triangleCount : 12,
                    boundingBox : {
                        min : [0, 0, 0],
                        max : [1, 1, 1]
                    }
                }
            ]
        });
    });        
});
