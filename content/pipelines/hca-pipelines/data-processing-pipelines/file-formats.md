---
path: "/pipelines/hca-pipelines/data-processing-pipelines/file-formats"
date: "2018-05-03"
title: "Data Processing Pipelines File Formats"
description: "Overview of the file formats used by the data processing pipelines of the HCA DCP."
---

# File Formats of the Data Processing Pipelines Service

## Matrix Download File Format

Matrices are provided in [Loom](http://loompy.org/) file format. You can downloaded matrices through the HCA *Data Portal*. You can use the portal's Data Browser to make a multifaceted search to dynamically generate matrices or you can explore the matrices available on individual project pages.

## Working Loom Files

Loom files can be explored using multiple Python- and R-supported downstream analysis tools, including [Seurat](https://satijalab.org/seurat/), [SCANPY](https://github.com/theislab/scanpy), and [Pegasus](https://pegasus.readthedocs.io/en/latest/). 


### Working in Seurat

For use Loom in Seurat, please view the [Loom branch](https://github.com/satijalab/seurat/tree/loom) of the Seurat software in GitHub. You can use the following code to install the Loom branch:
```R
if (!requireNamespace("remotes", quietly = TRUE)) {
  install.packages("remotes")
}
remotes::install_github("mojaveazure/seurat-disk", "feat/loom)
```
For help with this branch, use `?LoadLoom` for more details about the function.

