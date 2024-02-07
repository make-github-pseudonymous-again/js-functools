import util from 'node:util';
import test from 'ava';
import * as functools from '#module';

const f = (x, y, z) => 2 * x + y - z;

const g = functools.curry(f, f.length);

const one = function (t, x, y, z) {
	let msg;

	msg = util.format('g( %s, %s, %s ) === f( %s, %s, %s )', x, y, z, x, y, z);
	t.deepEqual(g(x, y, z), f(x, y, z), msg);

	msg = util.format('g( %s )( %s, %s ) === f( %s, %s, %s )', x, y, z, x, y, z);
	t.deepEqual(g(x)(y, z), f(x, y, z), msg);

	msg = util.format(
		'g( %s )( %s )( %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(g(x)(y)(z), f(x, y, z), msg);

	msg = util.format('g( %s, %s )( %s ) === f( %s, %s, %s )', x, y, z, x, y, z);
	t.deepEqual(g(x, y)(z), f(x, y, z), msg);

	msg = util.format(
		'g()()()( %s, %s, %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(g()()()(x, y, z), f(x, y, z), msg);

	msg = util.format(
		'g()()()( %s )()( %s, %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(g()()()(x)()(y, z), f(x, y, z), msg);

	msg = util.format(
		'g()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(g()()()(x)()(y)()(z), f(x, y, z), msg);

	msg = util.format(
		'g()()()( %s, %s )()( %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(g()()()(x, y)()(z), f(x, y, z), msg);

	const h = g();

	msg = util.format('h( %s, %s, %s ) === f( %s, %s, %s )', x, y, z, x, y, z);
	t.deepEqual(h(x, y, z), f(x, y, z), msg);

	msg = util.format('h( %s )( %s, %s ) === f( %s, %s, %s )', x, y, z, x, y, z);
	t.deepEqual(h(x)(y, z), f(x, y, z), msg);

	msg = util.format(
		'h( %s )( %s )( %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(h(x)(y)(z), f(x, y, z), msg);

	msg = util.format('h( %s, %s )( %s ) === f( %s, %s, %s )', x, y, z, x, y, z);
	t.deepEqual(h(x, y)(z), f(x, y, z), msg);

	msg = util.format(
		'h()()()( %s, %s, %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(h()()()(x, y, z), f(x, y, z), msg);

	msg = util.format(
		'h()()()( %s )()( %s, %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(h()()()(x)()(y, z), f(x, y, z), msg);

	msg = util.format(
		'h()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(h()()()(x)()(y)()(z), f(x, y, z), msg);

	msg = util.format(
		'h()()()( %s, %s )()( %s ) === f( %s, %s, %s )',
		x,
		y,
		z,
		x,
		y,
		z,
	);
	t.deepEqual(h()()()(x, y)()(z), f(x, y, z), msg);
};

test('curry', (t) => {
	one(t, 0, 0, 0);
	one(t, 1, 0, 0);
	one(t, 0, 1, 0);
	one(t, 0, 0, 1);
	one(t, 0, 3, 40);
	one(t, 13, 41, 97);
});
