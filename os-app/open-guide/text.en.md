# MassageTXT Guide

<div class="MSWGuideNotice">
This document is a work-in-progress.
</div>

## Quick Introduction

Transformations are specified as an *Expression*.

An *Expression* begins with a *Variable*, usually `$input`.

An *Operation* follows the *Variable*, for example `lines`:

```
$input.lines
```

Sometimes an *Operation* takes arguments

```
$input.prepend(Hello )
```

* * *

## API Reference

### String Operations

__lowercase__

__split__(LITERAL)

__lines__

__conform__(REGEX)

__capture__(REGEX)

__prepend__(LITERAL)

__postpend__(LITERAL)

__markdown__

### Object Operations

__remap__(MAPPING)

__print__(LITERAL)

### Array Operations

__first__

__last__

__reverse__

__unique__

__group__(LITERAL)

__conform__(REGEX)

__capture__(REGEX)

__remap__(MAPPING)

__join__(LITERAL)

### MarkdownTree Operations

__sections__

__content__(LITERAL)

__items__

__paragraphs__
