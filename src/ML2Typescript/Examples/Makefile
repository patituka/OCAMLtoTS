TARGET = $(patsubst %.ml,%.ts,$(wildcard *.ml))

all: folders default

folders:
	mkdir -p ML
	mkdir -p TS
	mkdir -p _build

default: $(TARGET)

clean:
	dune clean

.SUFFIXES : .ml .ts

.ml.ts:
	dune exec -- ../Main.bc -pretty $*.ml > ML/$*.ml
	dune exec -- ../Main.bc -check $*.ml ML/$*.ml
	dune exec -- ../Main.bc $*.ml > TS/$*.ts
