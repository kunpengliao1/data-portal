---
path: "/guides/userguides/matrices"
date: "2020-11-13"
title: "Matrices"
description: "An overview of the available matrices"
---

# HCA DCP Data Matrix Overview

You DCP provides cell by gene matrices for data processed with standardized pipelines. Additionally, any researcher who contributes HCA data may optionally provide a "contributor generated" cell by gene matrix. This overview describes both matrices, how to download them, and how to link them back to the metadata.

## DCP generated matrices
After data is processed with standardized DCP pipelines, two types of cell by gene matrices are available for download depending on the library construction method:
-  project-level matrices: matrices for a project that have been separated by species (human or mouse), organ, and sequencing technology (10x or SS2) 
-  library-level matrices (**10x data only**): matrices for a project that are split by library preparations; all samples in this matrix will have the same metadata for the field `sequencing_process.provenance.document_id` 

#### What's in the DCP loom matrix? 

The loom matrices have three types of attributes:
- global: information that applies to all data in the loom
- row: gene-specific information (one row = one gene)
- column: cell-specific information (one column - one cell)

All DCP loom matrices contain standard [metrics](/pipelines/hca-pipelines/data-processing-pipelines/qc-metrics) that are specific to the data processing pipeline used to generate the file. However, for 10x data, project-level and library-level loom files will differ slightly in the metdata used for global and column attributes (described more below).

Additionally, all DCP matrices have unfiltered cell by gene counts. For the most up-to-date information on counts and metrics, see the Smart-seq2 loom schema and the Optimus loom schema (10x data).

#### DCP project-level matrices
All datasets processed with standardized pipelines have project-level matrices (in loom file format). These matrices have the following HCA metadata in the global attributes:
- `species`: contains the metadata values for `donor_organism.genus_species`
- `library_construction_method`: contains the metadata values for `library_preparation_protocol.library_construction_method`
- `organ`: contains the metadata values for `specimen_from_organism.organ`	
- `project_name`: contains the metadata values for `project.project_core.project_name`
- `project_id`: contains the metadata values for `project.provenance.document_id`


The loom matrix rows of the loom file contain gene metrics and the columns contain cell metrics (see the metrics overview for a brief description). Additionally, the loom columns contain the following HCA metadata:
- `input_id`: contains the metadata value for  `sequencing_process.provenance.document_id` 
- `input_name`: contains the metadata value for `sequencing_input.biomaterial_core.biomaterial_id`
 


#### DCP library-level matrices (10x data only)
Library-level matrices (loom files) are only applicable to 10x datasets. Unlike the project-level matrices, =they have the following metadata in the loom global attributes:
- `input_id`: contains the metadata value for  `sequencing_process.provenance.document_id`  
- `input_name`: contains the metadata value for `sequencing_input.biomaterial_core.biomaterial_id`

The library-level matrix contains the same gene (row) metrics and cell (column) metrics as the project-level matrices. 


## Contributor-generated matrices

## Downloading Matrices

## Linking matrices to the Data Manifest (metadata)