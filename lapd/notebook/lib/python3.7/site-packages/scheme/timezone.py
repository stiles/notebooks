from datetime import datetime, timedelta, tzinfo
import time

__all__ = ('LOCAL', 'UTC', 'current_timestamp')

ZERO = timedelta(0)

STD_OFFSET = timedelta(seconds=-time.timezone)
if time.daylight:
    DST_OFFSET = timedelta(seconds=-time.altzone)
else:
    DST_OFFSET = STD_OFFSET
DST_DIFF = DST_OFFSET - STD_OFFSET

class FixedOffsetTimezone(tzinfo):
    name = None
    offset = ZERO

    def __init__(self, offset=None, name=None):
        self.name = name
        if offset is not None:
            self.offset = timedelta(minutes=offset)
        else:
            self.offset = None

    def __repr__(self):
        if self.name:
            return self.name
        return 'FixedOffsetTimezone(%r)' % self.offset.seconds

    def dst(self, value):
        return ZERO

    def tzname(self, value):
        if self.name is not None:
            return self.name

        seconds = self.offset.seconds + (self.offset.days * 86400)
        hours, seconds = divmod(seconds, 3600)

        minutes = seconds / 60
        if minutes:
            return '%+03d:%d' % (hours, minutes)
        else:
            return '%+03d' % hours

    def utcoffset(self, value=None):
        return self.offset

class LocalTimezone(tzinfo):
    def __repr__(self):
        return 'LocalTimezone()'

    def dst(self, value):
        if self._isdst(value):
            return DST_DIFF
        else:
            return ZERO

    def tzname(self, value):
        return time.tzname[self._isdst(value)]

    def utcoffset(self, value):
        if self._isdst(value):
            return DST_OFFSET
        else:
            return STD_OFFSET

    def _isdst(self, v):
        timestamp = time.mktime((v.year, v.month, v.day, v.hour, v.minute,
            v.second, v.weekday(), 0, -1))
        return (time.localtime(timestamp).tm_isdst > 0)

LOCAL = LocalTimezone()
UTC = FixedOffsetTimezone(0, 'UTC')

def current_timestamp(timezone=None):
    if not isinstance(timezone, tzinfo):
        timezone = UTC
    return datetime.now(timezone)
